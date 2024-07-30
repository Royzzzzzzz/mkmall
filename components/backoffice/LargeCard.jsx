import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex item-center flex-col gap-2 ${data.color}`}
    >
      <Layers />
      <h4>{data.period}</h4>
      <h2 className="text-3xl lg:text-3xl">{data.sales}원</h2>
    </div>
  );
}
