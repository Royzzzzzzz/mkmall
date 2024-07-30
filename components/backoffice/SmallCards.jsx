import React from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "전체 주문",
      numbers: 500,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "주문 대기중",
      numbers: 100,
      iconBg: "bg-red-600",
      icon: Loader,
    },
    {
      title: "주문 처리중",
      numbers: 200,
      iconBg: "bg-blue-600",
      icon: RefreshCcw,
    },
    {
      title: "배달 완료",
      numbers: 300,
      iconBg: "bg-orange-600",
      icon: CheckCheck,
    },
  ];
  <RefreshCcw />;
  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
      {/* <LargeCard className="bg-green-600" />
      <LargeCard className="bg-blue-600" />
      <LargeCard className="bg-orange-600" />
      <LargeCard className="bg-purple-600" /> */}
    </div>
  );
}
