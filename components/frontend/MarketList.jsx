import React from "react";
import MarketsCarousel from "./MarketsCarousel";
import { getData } from "@/lib/getData";

export default async function MarketList() {
    const markets = await getData("markets");
    return (
        <div className="py-16 text-white">
            {/* 마켓 슬라이더 */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-yellow-800">
                <h2 className="py-2 text-center text-2xl text-slate-900 dark:text-slate-50 mb-4">
                    마켓 리스트입니다
                </h2>
                <MarketsCarousel markets={markets} />
            </div>
        </div>
    );
}
