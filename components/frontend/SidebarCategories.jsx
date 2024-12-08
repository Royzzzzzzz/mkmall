import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getData } from "@/lib/getData";
export default async function SidebarCategories() {
    const categories = await getData("categories");
    return (
        <div className="sm:col-span-3 sm:block overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
            <h2 className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
                카테고리 ({categories.length})
            </h2>
            <div className="px-6 py-3 h-[300px] overflow-y-auto flex flex-col gap-2">
                {categories.map((category, i) => {
                    return (
                        <Link
                            key={i}
                            href="#"
                            className="flex items-center gap-3 transition-all duration-500 rounded-md hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-600">
                            <Image
                                width={556}
                                height={556}
                                className="object-cover w-10 h-10 border border-yellow-100 rounded-full"
                                src={category.imageUrl}
                                alt={category.title}
                            />
                            <span className="text-sm">{category.title}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
