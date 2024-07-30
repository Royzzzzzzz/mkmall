import React from "react";
import { ShoppingCart } from "lucide-react";
export default function SmallCard({ data }) {
  const { title, numbers, iconBg, icon: Icon } = data;
  return (
    <div className="p-4 rounded-lg shadow-lg bg-slate-700">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          <Icon className="" />
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">400</h3>
        </div>
      </div>
    </div>
  );
}
