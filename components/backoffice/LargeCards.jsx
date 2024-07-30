import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards(item) {
  const orderStats = [
    {
      period: "금일 주문건",
      sales: 11000,
      color: "bg-green-600",
    },
    {
      period: "전일 주문건",
      sales: 15000,
      color: "bg-red-600",
    },
    {
      period: "이번달 주문건",
      sales: 9900000,
      color: "bg-blue-600",
    },
    {
      period: "저번달 주문건",
      sales: 8844300,
      color: "bg-orange-600",
    },
    {
      period: "총 주문건",
      sales: 98450000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orderStats.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />;
      })}
      {/* <LargeCard className="bg-green-600" />
      <LargeCard className="bg-blue-600" />
      <LargeCard className="bg-orange-600" />
      <LargeCard className="bg-purple-600" /> */}
    </div>
  );
}
