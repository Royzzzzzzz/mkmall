import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } = await request.json();
    const newCategory = { title, slug, imageUrl, description, isActive };
    console.log(newCategory);
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
