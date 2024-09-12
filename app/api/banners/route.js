import {  NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title,link, imageUrl } = await request.json();
        const newBanner = { title,link, imageUrl }
        console.log(newBanner)
        return NextResponse.json(newBanner)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "배너 생성 실패",
            error
        }, { status: 500 })
    }

}