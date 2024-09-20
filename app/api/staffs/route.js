import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    } = await request.json();
    const NewStaff = {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    };
    console.log(NewStaff);
    return NextResponse.json(NewStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "직원 추가 실패",
        error,
      },
      { status: 500 }
    );
  }
}
