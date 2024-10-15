import db from "@/lib/db";
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
    //Check if this training already exists
    const existingTraining = await db.training.findUnique({
      where: {
        slug,
      },
    });
    if (existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "이미 같은교육이 존재합니다",
        },
        { status: 409 }
      );
    }
    const newTraining = await db.training.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        content,
      },
    });
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

export async function GET(request) {
  try {
    const trainings = await db.training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(trainings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "트레이닝 가져오기 실패",
        error,
      },
      { status: 500 }
    );
  }
}
