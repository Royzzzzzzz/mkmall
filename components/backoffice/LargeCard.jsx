import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ className }) {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex item-center flex-col gap-2 ${className}`}
    >
      <Layers />
      <h4>금일 주문</h4>
      <h2 className="text-3xl">5,430,000원</h2>
    </div>
  );
}
