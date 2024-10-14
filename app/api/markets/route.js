import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, logoUrl, description, isActive, categoryIds } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: {
        slug,
      },
    });
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "같은시장이 이미 존재합니다",
        },
        { status: 409 }
      );
    }

    const newMarket = await db.market.create({
      data: { title, slug, logoUrl, description, isActive, categoryIds },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "마켓 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "시장 가져오기 실패",
        error,
      },
      { status: 500 }
    );
  }
}
