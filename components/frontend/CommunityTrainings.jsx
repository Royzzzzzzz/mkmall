import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";
import TrainingCarousel from "./TrainingCarousel";
import { getData } from "@/lib/getData";

export default async function CommunityTrainings() {
    const trainings = await getData("trainings");
    return (
        <div className="overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800">
            <div className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex justify-between items-center">
                <h2>MK 커뮤니티</h2>
                <Link
                    className="bg-yellow-300 text-slate-50 rounded-md px-4 py-2 hover:bg-yellow-400 duration-300 transition-all"
                    href="#">
                    전체보기
                </Link>
            </div>

            <div className="bg-white dark:bg-slate-700 py-4">
                <TrainingCarousel trainings={trainings} />
            </div>
        </div>
    );
}
