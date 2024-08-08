import React from "react";
import { Sun, Bell, User, AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 flex items-center justify-between w-full h-16 px-8 py-4 bg-slate-700 text-slate-50">
      <div className="flex">
        <button>
          <AlignJustify size={24} color="white" />
        </button>
      </div>
      {/* 3 아이콘 */}
      <div className="flex space-x-3">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Bell size={24} color="white" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Bell size={24} color="white" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Bell size={24} color="white" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>
      </div>
    </div>
  );
}
