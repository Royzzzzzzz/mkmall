import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { title, link, imageUrl, isActive } = await request.json();
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive,
      },
    });
    // 중간 테이블에 배너와 제품 관계 추가
    if (productIds && productIds.length > 0) {
      await Promise.all(
        productIds.map((productId) =>
          db.bannerProduct.create({
            data: {
              bannerId: newBanner.id,
              productId,
            },
          })
        )
      );
    }
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "배너 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(banners);
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
