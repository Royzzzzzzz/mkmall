import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isActive } = await request.json();
    // const dateObject = new Date(expiryDate);
    // const isoFormattedDate = dateObject.toISOString();
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "쿠폰 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const coupons = await db.coupon.findMany();
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "쿠폰 가져오기 실패",
        error,
      },
      { status: 500 }
    );
  }
}
