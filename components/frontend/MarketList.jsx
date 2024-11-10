import React from "react";
import MarketsCarousel from "./MarketsCarousel";

export default function MarketList() {
    return (
        <div>
            <h2>마켓 리스트입니다</h2>
            {/* 마켓 슬라이더 */}
            <MarketsCarousel />
        </div>
    );
}
