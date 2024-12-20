"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import advert from "../../public/banners/hero_banner.gif";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";

export default function Hero() {
    const categories = [{}, {}, {}, {}, {}, {}, {}];
    return (
        <div className="grid grid-cols-12 gap-8 px-8 mb-6 ">
            <div className="sm:col-span-3 sm:block overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
                <h2 className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
                    카테고리
                </h2>
                <div className="px-6 py-3 h-[300px] overflow-y-auto flex flex-col gap-2">
                    {categories.map((category, i) => {
                        return (
                            <Link
                                key={i}
                                href="#"
                                className="flex items-center gap-3 transition-all duration-500 rounded-md hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-600">
                                <Image
                                    width={556}
                                    height={556}
                                    className="object-cover w-10 h-10 border border-yellow-100 rounded-full"
                                    src="/fruits.png"
                                    alt="fruits"
                                />
                                <span className="text-sm">과일</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="bg-blue-600 rounded-md col-span-full sm:col-span-7">
                <HeroCarousel />
            </div>
            <div className="col-span-2 p-3 bg-white rounded-lg dark:bg-slate-800">
                <Link href="#" className="flex items-center mb-3 space-x-1">
                    <HelpCircle className="w-5 h-5 dark:text-yellow-300 text-slate-900 shrink-0" />
                    <div className="flex flex-col">
                        <h2 className="text-sm uppercase">도움센터</h2>
                        <p className="text-[0.6rem]">도움이 필요하신가요?</p>
                    </div>
                </Link>
                <Link
                    href="/register-farmer"
                    className="flex items-center mb-3 space-x-1">
                    <FolderSync className="w-5 h-5 dark:text-yellow-300 text-slate-900 shrink-0" />
                    <div className="flex flex-col">
                        <h2 className="text-sm uppercase">반품요청</h2>
                        <p className="text-[0.6rem]">빠른반품을 도와드립니다</p>
                    </div>
                </Link>
                <Link
                    href="/register-farmer"
                    className="flex items-center mb-6 space-x-1">
                    <CircleDollarSign className="w-5 h-5 dark:text-yellow-300 text-slate-900 shrink-0" />
                    <div className="flex flex-col">
                        <h2 className="text-sm uppercase">MKmall 등록</h2>
                        <p className="text-[0.6rem]">판매경로를 찾아보세요</p>
                    </div>
                </Link>
                <Image src={advert} alt="" className="w-full rounded-lg" />
            </div>
        </div>
    );
}
