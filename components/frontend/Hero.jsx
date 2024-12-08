import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import advert from "../../public/banners/hero_banner.gif";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";

export default async function Hero() {
    const banners = await getData("banners");
    return (
        <div className="grid grid-cols-12 gap-8 px-8 mb-6 ">
            <SidebarCategories />
            <div className="bg-blue-600 rounded-md col-span-full sm:col-span-7">
                <HeroCarousel banners={banners} />
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
