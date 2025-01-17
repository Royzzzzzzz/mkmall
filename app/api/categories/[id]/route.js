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
