import PageHeader from "@/components/backoffice/PageHeader";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";

export default function pages() {
  return (
    <div>
      {/* 헤더 */}
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      {/* 테이블 */}
      {/* Export || Search || Bulk Delete */}
      <div className="flex items-center justify-between gap-8 px-12 py-6 mt-12 rounded-lg bg-slate-700">
        <button className="relative inline-flex items-center justify-center px-4 py-3 space-x-3 text-base font-medium text-gray-900 border border-yellow-200 rounded-lg hover:bg-blue-800 group bg-slate-800 from-purple-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <Download />
          <span>추출하기</span>
        </button>
        {/* search */}
        <div className="flex-grow">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-3/4 pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="검색어 입력"
            />
          </div>
        </div>
        {/* delete */}
        <button className="flex items-center px-6 py-3 space-x-2 text-white bg-red-600 rounded-lg">
          <Trash2 />
          <span>삭제</span>
        </button>
      </div>
      <h2>카테고리</h2>
    </div>
  );
}
