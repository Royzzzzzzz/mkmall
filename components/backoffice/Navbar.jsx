import React from "react";
import { Sun, Bell, User, AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-8 py-4 bg-slate-700 text-slate-50 pr-[14rem]">
      <div className="flex">
        <button>
          <AlignJustify size={24} color="white" />
        </button>
      </div>
      {/* 3 아이콘 */}
      <div className="flex space-x-3 ">
        <button>
          <Sun className="text-green-600" />
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-slate-700 dark:hover:bg-blue-700"
        >
          <Bell size={24} className="text-green-600" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            20
          </div>
        </button>
        {/* <button className="relative flex items-center justify-center w-10 h-10">
          <img
            src="https://pixabay.com/ko/photos/%EC%97%AC%EC%9E%90-%EC%82%AC%EC%A7%84%EA%B4%80-%ED%9D%91%EB%B0%B1-%EC%97%AC%EC%84%B1-4663125/" // Pexels에서 제공하는 임의의 인물 사진 URL
            alt="User"
            className="object-cover w-10 h-10 rounded-full"
          />
        </button> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <User className="text-green-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
