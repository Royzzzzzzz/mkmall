import React from "react";
import Sidebar from "@/components/backoffice/Sidebar";
import Navbar from "@/components/backoffice/Navbar";

export default function layout({ children }) {
  return (
    <div className="flex">
      {/* 사이드바 */}
      <Sidebar />
      <div className="w-full">
        {/* 헤더 */}
        <Navbar />
        <main className="p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
        {/* 메인 */}
      </div>
      {/* 메인 바디 */}
    </div>
  );
}
