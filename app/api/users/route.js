import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
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
          message: "유저가 이미 존재합니다",
        },
        { status: 409 }
      );
    }
    // 비밀번호 암호화 => bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "생성이 완료되었습니다",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "서버 에러 발생",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "유저정보 가져오기 실패",
        error,
      },
      { status: 500 }
    );
  }
}
