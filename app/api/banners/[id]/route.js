import { NextResponse } from 'next/server';
import { ObjectId } from "mongodb"; // ObjectId를 MongoDB에서 가져오기
import db from '../../../../lib/db';

export async function GET(request, { params: { id } }) {
    try {
        // 1. ID의 유효성 검사
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { message: "유효하지 않은 ID입니다." },
                { status: 400 }
            );
        }

        // 2. MongoDB ObjectId로 변환
        const objectId = new ObjectId(id);
        // 3. 배너 데이터 조회
        const banner = await db.banner.findUnique({
            where: { id: objectId },
            include: {
                productRelations: {
                    include: { product: true }, // Product 데이터 포함
                },
            },
        });

        // 4. 배너가 없을 경우 처리
        if (!banner) {
            return NextResponse.json(
                { message: "배너를 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        // 5. 반환 데이터를 형식화
        const formattedBanner = {
            id: banner.id,
            title: banner.title,
            link: banner.link,
            imageUrl: banner.imageUrl,
            isActive: banner.isActive,
            products: banner.productRelations.map((relation) => ({
                id: relation.product.id,
                title: relation.product.title,
                description: relation.product.description,
                price: relation.product.productPrice,
            })),
        };

        // 6. 클라이언트에 데이터 반환
        return NextResponse.json(formattedBanner);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "배너 가져오기 실패",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { message: "유효하지 않은 ID입니다." },
                { status: 400 }
            );
        }

        const existingBanner = await db.banner.findUnique({
            where: { id },
        });

        if (!existingBanner) {
            return NextResponse.json(
                { message: "배너를 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        const deletedBanner = await db.banner.delete({
            where: { id },
        });

        return NextResponse.json(deletedBanner);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "배너 삭제 실패",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        // 데이터 받기

        const { title, link, imageUrl, isActive, productIds } = await request.json();

        const existingBanner = await db.banner.findUnique({
            where: {
                id
            },
        });
        if (!existingBanner) {
            return NextResponse.json({
                data: null,
                message: `찾을수 없음`,
            }, { status: 404 })

        }
        const updatedBanner = await db.banner.update({
            where: { id },
            data: { title, link, imageUrl, isActive }
        })
        // 중간 테이블 관계 업데이트
        if (productIds && productIds.length > 0) {
            // 기존 관계 삭제
            await db.bannerProduct.deleteMany({
                where: { bannerId: id },
            });

            // 새로운 관계 추가
            await Promise.all(
                productIds.map((productId) =>
                    db.bannerProduct.create({
                        data: {
                            bannerId: id,
                            productId: new ObjectId(productId),
                        },
                    })
                )
            );
        }
        return NextResponse.json(updatedBanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "배너 업데이트 실패",
                error,
            },
            { status: 500 }
        );
    }
}