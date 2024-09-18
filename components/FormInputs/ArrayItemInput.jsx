"use client";
import React, { useState } from "react";
import { Plus, PlusIcon, X, XCircle } from "lucide-react";
export default function ArrayItemInput({ setItems, items = [], itemTitle }) {
    const [item, setItem] = useState("");
    const [showTagForm, setShowTagForm] = useState(false);
    //태그 추가 함수
    function addItem() {
        if (!item) return;
        setItems([...items, item]);
        setItem("");
    }
    //태그 삭제 함수
    function removeItem(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }
    // 태그 엔드
    return (
        <div className="sm:col-span-2">
            {showTagForm ? (
                <div className="flex items-center max-w-lg mx-auto">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            placeholder={`${itemTitle} 생성`}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => addItem(item)} // addTag 함수에 tag 값을 넘김
                        className="shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellow-400">
                        <PlusIcon className="w-4 h-4 me-2" />
                        <h4>추가</h4>
                    </button>
                    <button onClick={() => setShowTagForm(false)} type="button" className="ml-3 shrink-0 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <button onClick={() => setShowTagForm(true)} type="button" className="flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4">
                    <Plus />
                    <span>{itemTitle} 추가</span>
                </button>
            )}
            <div className="flex flex-wrap gap-4 mt-6">
                {items.map((item, i) => {
                    return (
                        <div key={i} onClick={() => removeItem(i)} className="flex space-x-2 items-center bg-slate-200 dark:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer dark:text-slate-300 text-slate-800">
                            <p>{item}</p>
                            <XCircle className="w-4 h-4" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
