import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
    } = await request.json();
    const newFarmer = await db.farmer.create({
      data: {
        code,
        contactPerson,
        contactPersonPhone,
        email,
        name,
        notes,
        phone,
        physicalAddress,
        terms,
        isActive,
        profileImageUrl,
      },
    });
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "공급업체 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}
