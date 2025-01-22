import Breadcrumb from "@/components/frontend/Breadcrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function ProductDetailPage({ params: { slug } }) {
    const category = await getData("/categories/67500df17a235edb1734993d");
    return (
        <div>
            <Breadcrumb />
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <Image
                        src="/vegetable/veg_2.jpg"
                        alt="veg"
                        width={556}
                        height={556}
                        className="w-full"
                    />
                </div>

                <div className="col-span-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl lg:text-3xl">딸기</h2>
                        <button>
                            <Share2 />
                        </button>
                    </div>

                    <div className="border-b border-gray-500">
                        <p className="py-2 ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </p>
                        <div className="flex items-center gap-8 mb-4">
                            <p>SKU: 3243432</p>
                            <p className="bg-yellow-200 py-1.5 px-4 rounded-full text-slate-900">
                                <b>Stock</b>: 233
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
                        <div className="flex items-center gap-4">
                            <h4 className="text-2xl">5000</h4>
                            <del className="text-slate-400 text-sm">6000</del>
                        </div>
                        <p className="flex items-center ">
                            <Tag className="w-5 h-5 text-slate-400 me-2" />
                            <span>50% 즉시 할인</span>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center py-6">
                        <div className=" rounded-xl border border-gray-400 flex gap-3 items-center px-4">
                            <button className="border-r border-gray-400 py-2 px-4">
                                <Minus />
                            </button>
                            <p className="flex-grow py-2 px-4">1</p>
                            <button className="border-l border-gray-400 py-2 px-4">
                                <Plus />
                            </button>
                        </div>
                        <button className="flex items-center space-x-2 bg-yellow-300 px-4 py-2 rounded-md text-white ">
                            <BaggageClaim />
                            <span>카트 추가</span>
                        </button>
                    </div>
                </div>

                <div className="col-span-3 sm:block overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
                    <h2 className="px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:border-gray-600 hover:bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
                        교환 환불
                    </h2>
                    <div className="p-4 ">
                        <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
                            <span>MK 배송</span>
                            <Send />
                        </div>
                        <div className="py-3 text-slate-100 border-b border-gray-500">
                            무료배송 신청하기
                            <Link href="#" className="text-slate-400 text-sm">
                                자세히 보기
                            </Link>
                        </div>
                        <h2 className="text-slate-200 py-2">
                            국가를 선택하세요.
                        </h2>
                        <div className="pb-3">
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className=" pb-3">
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="pb-3">
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
                <h2 className="mb-4 text-2xl font-semibold text-slate-200 ml-4">
                    유사한 제품들
                </h2>
                <CategoryCarousel products={category.products} />
            </div>
        </div>
    );
}
