import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      imageUrl,
      categoryId,
      description,
      isActive,
      content,
    } = await request.json();
    const newTraining = {
      title,
      slug,
      imageUrl,
      categoryId,
      description,
      isActive,
      content,
    };
    console.log(newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "트레이닝 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}
