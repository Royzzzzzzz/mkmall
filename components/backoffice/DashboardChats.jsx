import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingProductsChart from "./BestSellingProductsChart";

export default function DashboardChats() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  );
}
