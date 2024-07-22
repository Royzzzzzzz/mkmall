import React from "react";
import Link from "next/link";
export default function Sidebar() {
    return (
        <div className="bg-slate-700 space-y-6 w-52 h-screen text-slate-50 p-3">
            <Link className="mb-6" href="#">
                Logo
            </Link>
            <div className="space-y-3 flex flex-col">
                <Link href="#">대쉬보드</Link>
                <Link href="#">카탈로그</Link>
                <Link href="#">고객주문</Link>
                <Link href="#">시장</Link>
                <Link href="#">파머스</Link>
                <Link href="#">주문</Link>
                <Link href="#">스태프</Link>
                <Link href="#">설정</Link>
                <Link href="#">온라인 스토어</Link>
            </div>
        </div>
    );
}
