"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}];
  return (
    <div className="flex gap-8">
      <div className="w-1/3 max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 ">
        <h2 className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
          카테고리
        </h2>
        <div className="px-6 py-3 h-[300px] overflow-y-auto flex flex-col gap-2">
          {categories.map((category, i) => {
            return (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-3 transition-all duration-500 rounded-md hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-600"
              >
                <Image
                  width={556}
                  height={556}
                  className="object-cover w-12 h-12 border border-yellow-100 rounded-full"
                  src="/fruits.png"
                  alt="fruits"
                />
                <span className="text-sm">과일</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-2/3 bg-blue-500 rounded-md">
        <HeroCarousel />
      </div>
    </div>
  );
}
