import db from '../../../../lib/db';
import { NextResponse } from 'next/server';
export async function GET(request, { params: { id } }) {
    try {
        const banner = await db.banner.findUnique({
            where: {
                id
            },
            include: {
                products: true
            }
        });
        return NextResponse.json(banner);
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

        const { title, link, imageUrl, isActive } = await request.json();

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