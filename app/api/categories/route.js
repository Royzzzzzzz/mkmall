import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "카테고리가 이미 존재합니다",
        },
        { status: 409 }
      );
    }
    const newCategory = await db.category.create({
      data: { title, slug, imageUrl, description, isActive },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "카테고리 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true
      }
    });
    return NextResponse.json(categories);
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
