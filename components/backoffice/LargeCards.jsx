import React from "react";
import LargeCard from "./LargeCard";
import { faker } from "@faker-js/faker";

export default function LargeCards() {
  const formatCurrency = (value) => {
    return `₩${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };
  const generateOrderStats = () => [
    {
      period: "금일 주문건",
      sales: faker.number.int({ min: 10000, max: 300000 }),
      color: "bg-blue-500", // 사용자 친화적인 색상으로 변경
    },
    {
      period: "전일 주문건",
      sales: faker.number.int({ min: 10000, max: 300000 }),
      color: "bg-green-500", // 사용자 친화적인 색상으로 변경
    },
    {
      period: "이번달 주문건",
      sales: faker.number.int({ min: 500000, max: 2000000 }),
      color: "bg-yellow-500", // 사용자 친화적인 색상으로 변경
    },
    {
      period: "저번달 주문건",
      sales: faker.number.int({ min: 500000, max: 2000000 }),
      color: "bg-red-500", // 사용자 친화적인 색상으로 변경
    },
    {
      period: "총 주문건",
      sales: faker.number.int({ min: 1000000, max: 10000000 }),
      color: "bg-purple-500", // 사용자 친화적인 색상으로 변경
    },
  ];

  const orderStats = generateOrderStats();

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orderStats.map((item, i) => (
        <LargeCard
          data={{ ...item, sales: formatCurrency(item.sales) }}
          key={i}
        />
      ))}
    </div>
  );
}
