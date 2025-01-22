import db from '../../../../lib/db';
import { NextResponse } from 'next/server';
export async function GET(request, { params: { id } }) {
    try {
        const category = await db.category.findUnique({
            where: {
                id
            },
            include: {
                products: true
            }
        });
        return NextResponse.json(category);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "카테고리 가져오기 실패",
                error,
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingCategory = await db.category.findUnique({
            where: {
                id
            },
        });
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "카테고리를 찾을 수 없습니다"
            }, { status: 404 });
        }
        const deletedCategory = await db.category.delete({
            where: {
                id
            },
        })
        return NextResponse.json(deletedCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "카테고리 삭제 실패",
                error,
            },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        // 데이터 받기
        const { id, title, slug, imageUrl, description, isActive } = await request.json()

        const existingCategory = await db.category.findUnique({
            where: {
                id
            },
        });
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: `찾을수 없음`,
            }, { status: 404 })

        }
        const updatedCategory = await db.category.update({
            where: { id },
            data: { title, slug, imageUrl, description, isActive }
        })
        return NextResponse.json(updatedCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "카테고리 업데이트 실패",
                error,
            },
            { status: 500 }
        );
    }
}
