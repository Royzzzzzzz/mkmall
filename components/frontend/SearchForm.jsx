import { DoorOpen, Search } from "lucide-react";
import React from "react";

export default function SearchForm() {
  return (
    <form className="flex items-center">
      <label htmlFor="voice-search" className="sr-only">
        검색
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <DoorOpen />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="상품, 카테고리, 시장을 입력하세요"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 flex items-center end-0 pe-3"
        ></button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Search className="w-4 h-4 me-2" />
        Search
      </button>
    </form>
  );
}
