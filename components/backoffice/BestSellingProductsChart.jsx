"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(0, 0, 255, 0.7)",
          "rgba(255, 0, 221, 0.7)",
          "rgba(2, 139, 71, 0.7)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(0, 0, 255, 0.3)",
          "rgba(255, 0, 221, 0.3)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8 rounded-lg bg-slate-700">
      <h2 className="text-xl font-bold">판매 순위</h2>
      <div className="p-4">
        <Pie data={data} width={100} height={100} className="h-14 w-14" />
      </div>
    </div>
  );
}
