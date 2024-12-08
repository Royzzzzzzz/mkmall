import Breadcrumb from "@/components/frontend/Breadcrumb";
import { Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductDetailPage({ params: { slug } }) {
    return (
        <div>
            <Breadcrumb />
            <div className="grid grid-cols-3 gap-5">
                <div className="">
                    <Image
                        src="/vegetable/veg_2.jpg"
                        alt="veg"
                        width={556}
                        height={556}
                        className="w-full"
                    />
                </div>

                <div className="div">
                    <div className="flex items-center justify-between">
                        <h2>딸기</h2>
                        <button>
                            <Share2 />
                        </button>
                    </div>
                </div>

                <div className=" sm:block overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
                    <h2 className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
                        교환 & 환불
                    </h2>
                </div>
            </div>
        </div>
    );
}
