import React from "react";
import Sidebar from "@/components/backoffice/Sidebar";
import Navbar from "@/components/backoffice/Navbar";

export default function layout({ children }) {
  return (
    <div className="flex">
      {/* 사이드바 */}
      <Sidebar />
      <div className="flex-grow w-full min-h-screen ml-0 bg-slate-100">
        {/* 헤더 */}
        <Navbar />
        <main className="p-8 mt-16 dark:bg-slate-900 text-slate-50">
          {children}
        </main>
        {/* 메인 */}
      </div>
      {/* 메인 바디 */}
    </div>
  );
}
