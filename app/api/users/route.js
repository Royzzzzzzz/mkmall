import db from "@/lib/db";
import { NextResponse } from "next/server";

export default async function POST(request) {
  try {
    //extract the creddentials
    const { name, email, password } = await request.json();

    //Check if the user Already exists in the db
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "이 유저 이미 존재합니다",
        },
        { status: 409 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "유저 생성 실패",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
