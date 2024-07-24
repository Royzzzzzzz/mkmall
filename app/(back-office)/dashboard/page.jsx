import React from "react";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";

export default function page() {
  return (
    <div>
      <Heading title="대쉬보드" />
      {/* 큰 카드 */}
      <LargeCards />
      {/* 작은 카드 */}
      {/* 판매 차트 */}
      {/* 최근 주문 */}
    </div>
  );
}
