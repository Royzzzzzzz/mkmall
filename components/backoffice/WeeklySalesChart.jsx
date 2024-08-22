"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "판매",
      type: "판매",
      color: "text-blue-400",
      activeColor: "text-blue-700 font-bold",
    },
    {
      title: "주문",
      type: "주문",
      color: "text-red-400",
      activeColor: "text-red-700 font-bold",
    },
  ];
  // Faker.js를 사용하여 데이터를 생성
  const generateData = (label1, label2, color1, color2) => ({
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
    datasets: [
      {
        label: label1,
        data: Array.from({ length: 7 }, () =>
          faker.number.int({ min: -1000, max: 1000 })
        ),
        fill: false,
        borderColor: color1,
        backgroundColor: color1,
        tension: 0.4,
      },
      {
        label: label2,
        data: Array.from({ length: 7 }, () =>
          faker.number.int({ min: -1000, max: 1000 })
        ),
        fill: false,
        borderColor: color2,
        backgroundColor: color2,
        tension: 0.4,
      },
    ],
  });

  const salesData = generateData(
    "판매 데이터 1",
    "판매 데이터 2",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)"
  );
  const orderData = generateData(
    "주문 데이터 1",
    "주문 데이터 2",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)"
  );
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       fill: false,
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //     },
  //   ],
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#999", // 범례 텍스트 색상
        },
      },
      title: {
        display: true,
        text: "월간 판매 차트",
        color: "#999", // 제목 텍스트 색상
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#999", // X축 텍스트 색상
        },
      },
      y: {
        ticks: {
          color: "#999", // Y축 텍스트 색상
        },
      },
    },
  };
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className="p-8 rounded-lg shadow-xl bg-slate-50 dark:bg-slate-700">
      <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-50">
        판매 차트
      </h2>
      <div className="">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px font-bold">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay == tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-300 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 text-slate-800 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 컨텐츠 보여주기 */}
        <div className="w-full h-96 ">
          {chartToDisplay === "판매" ? (
            <Line data={salesData} options={options} />
          ) : (
            <Line data={orderData} options={options} />
          )}
        </div>
        {/* {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line data={data} options={options} />;
          }
          return null;
        })} */}
      </div>
    </div>
  );
}
