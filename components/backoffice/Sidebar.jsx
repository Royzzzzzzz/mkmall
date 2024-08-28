"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  LayoutGrid,
  Slack,
  Truck,
  Users2,
  UserSquare2,
  Warehouse,
  User,
  LogOut,
  ChevronRight,
  Boxes,
  LayoutList,
  SendToBack,
  ScanSearch,
  Monitor,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({ showSidebar }) {
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
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? "sm:mt-0 w-64 h-screen py-4 fixed left-0 top-0 space-y-6 bg-slate-50 dark:bg-slate-700 dark:text-slate-50 text-slate-800 sm:block mt-20 overflow-y-scroll"
          : "mt-20 sm:mt-0 left-0 top-0 hidden w-64 h-screen py-4 space-y-6 bg-slate-50 dark:bg-slate-700 dark:text-slate-50 text-slate-800 sm:block overflow-y-scroll"
      }
    >
      <Link className="px-6" href="#">
        <span className="">mkMall</span>
      </Link>
      <div className="flex flex-col space-y-3">
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-600"
              : "flex items-center space-x-3 py-2 px-6 "
          }
        >
          <LayoutGrid />
          <span>대쉬보드</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger
            className=""
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className="flex items-center justify-between py-2 space-x-6 ">
              <div className="flex items-center space-x-3 ">
                <Slack />
                <span>카탈로그</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 py-3 pl-6 rounded-lg bg-slate-800">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={
                    pathname == item.href
                      ? "flex items-center space-x-3 py- text-lime-600 text-sm"
                      : "flex items-center space-x-3 py-1 "
                  }
                >
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
            <Link
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-600"
                  : "flex items-center space-x-3 py-2 px-6 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center px-8 py-3 space-x-3 bg-red-500 rounded-md">
            <LogOut />
            <span>로그아웃 </span>
          </button>
        </div>
      </div>
    </div>
  );
}
