"use client";
import React from "react";
import Link from "next/link";
import { ExternalLink, LayoutGrid, Slack, Truck, Users2, UserSquare2, Warehouse, User, LogOut, ChevronRight, Boxes, LayoutList, SendToBack, ScanSearch, Monitor } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Sidebar() {
    const pathname = usePathname();
    const sidebarLinks = [
        {
            title: "고객관리",
            icon: Users2,
            href: "/dashboard/customers",
        },
        {
            title: "시장",
            icon: Warehouse,
            href: "/dashboard/markets",
        },
        {
            title: "파머스",
            icon: UserSquare2,
            href: "/dashboard/farmers",
        },
        {
            title: "주문관리",
            icon: Truck,
            href: "/dashboard/orders",
        },
        {
            title: "직원관리",
            icon: User,
            href: "/dashboard/staff",
        },
        {
            title: "설정",
            icon: LayoutGrid,
            href: "/dashboard/settings",
        },
        {
            title: "온라인 스토어",
            icon: ExternalLink,
            href: "/",
        },
    ];
    const catalogueLinks = [
        {
            title: "상품관리",
            icon: Boxes,
            href: "/dashboard/products",
        },
        {
            title: "카테고리",
            icon: LayoutList,
            href: "/dashboard/categories",
        },
        {
            title: "속성",
            icon: SendToBack,
            href: "/dashboard/attributes",
        },
        {
            title: "쿠폰",
            icon: ScanSearch,
            href: "/dashboard/coupons",
        },
        {
            title: "스토어 슬라이더",
            icon: Monitor,
            href: "/dashboard/sliders",
        },
    ];
    return (
        <div className="w-64 h-screen py-4 space-y-6 bg-slate-50 dark:bg-slate-700 dark:text-slate-50 text-slate-800">
            <Link className="px-6" href="#">
                <span className="">mkMall</span>
            </Link>
            <div className="flex flex-col space-y-3">
                <Link href="/dashboard" className={pathname === "/dashboard" ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-600" : "flex items-center space-x-3 py-2 px-6 "}>
                    <LayoutGrid />
                    <span>대쉬보드</span>
                </Link>
                <Collapsible className="px-6 py-2">
                    <CollapsibleTrigger className="">
                        <button className="flex items-center space-x-6 py-2 justify-between ">
                            <div className="flex items-center space-x-3 ">
                                <Slack />
                                <span>카탈로그</span>
                            </div>
                            <ChevronRight />
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pl-6 bg-slate-800 rounded-lg py-3">
                        {catalogueLinks.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Link key={i} href={item.href} className={pathname == item.href ? "flex items-center space-x-3 py- text-lime-600 text-sm" : "flex items-center space-x-3 py-1 "}>
                                    <Icon className="w-4 h-4" />
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </CollapsibleContent>
                </Collapsible>
                {sidebarLinks.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Link key={i} href={item.href} className={item.href == pathname ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-600" : "flex items-center space-x-3 py-2 px-6 "}>
                            <Icon />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
                <div className="px-6 py-2">
                    <button className="flex items-center space-x-3 py-3 px-8 bg-red-500 rounded-md">
                        <LogOut />
                        <span>로그아웃 </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
