import db from '../../../../lib/db';
import { NextResponse } from 'next/server';
export async function GET(request, { params: { id } }) {
    try {
        const banner = await db.banner.findUnique({
            where: {
                id
            },
            include: {
                productRelations: { // 중간 테이블(BannerProduct) 통해 관계 조회
                    include: { product: true }, // Product 정보 포함
                },
            },
        });
        if (!banner) {
            return NextResponse.json(
                { message: "배너를 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        // 반환 데이터를 형식화 (products 배열로 반환)
        const formattedBanner = {
            ...banner,
            products: banner.productRelations.map((relation) => relation.product),
        };
        return NextResponse.json(formattedBanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "배너 가져오기 실패",
                error,
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingBanner = await db.banner.findUnique({
            where: {
                id
            },
        });
        if (!existingBanner) {
            return NextResponse.json({
                data: null,
                message: "배너를 찾을 수 없습니다"
            }, { status: 404 });
        }
        const deletedBanner = await db.banner.delete({
            where: {
                id
            },
        })
        return NextResponse.json(deletedBanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "배너 삭제 실패",
                error,
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
                            productId,
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