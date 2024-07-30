import React from "react";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";

export default function page() {
  return (
    <div>
      <Heading title="대쉬보드" />
      {/* 큰 카드 */}
      <LargeCards />
      <SmallCards />
      {/* 판매 차트 */}
      {/* 최근 주문 */}
    </div>
  );
}
