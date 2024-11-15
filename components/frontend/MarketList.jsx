import React from "react";
import MarketsCarousel from "./MarketsCarousel";

export default function MarketList() {
  return (
    <div className="py-16 text-white">
      <h2>마켓 리스트입니다</h2>
      {/* 마켓 슬라이더 */}
      <div className="p-4 rounded-lg bg-slate-50">
        <MarketsCarousel />
      </div>
    </div>
  );
}
