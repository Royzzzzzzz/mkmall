import Breadcrumb from "@/components/frontend/Breadcrumb";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
    return (
        <div>
            <Breadcrumb />
            <div className="grid grid-cols-12 gap-14">
                <div className="col-span-8">
                    <h2 className="py-2 mb-6 text-2xl font-semibold">
                        장바구니
                    </h2>
                    <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
                        <h2 className="uppercase">상품</h2>
                        <h2 className="uppercase">수량</h2>
                        <h2 className="uppercase">가격</h2>
                    </div>
                    <div className="">
                        {/* 카트1 */}
                        <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/fruits/fru_1.jpg"
                                    width={249}
                                    height={249}
                                    alt="alt text"
                                    className="rounded-xl w-20 h-20"
                                />
                                <div className="flex flex-col">
                                    <h2>딸기</h2>
                                    <small>오향딸기</small>
                                </div>
                            </div>
                            <div className=" rounded-xl border border-gray-400 flex gap-3 items-center px-4">
                                <button className="border-r border-gray-400 py-2 px-4">
                                    <Minus />
                                </button>
                                <p className="flex-grow py-2 px-4">1</p>
                                <button className="border-l border-gray-400 py-2 px-4">
                                    <Plus />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <h4>3500원</h4>
                                <button>
                                    <Trash2 className="text-red-600 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        {/* 카트2 */}
                        <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/fruits/fru_1.jpg"
                                    width={249}
                                    height={249}
                                    alt="alt text"
                                    className="rounded-xl w-20 h-20"
                                />
                                <div className="flex flex-col">
                                    <h2>딸기</h2>
                                    <small>오향딸기</small>
                                </div>
                            </div>
                            <div className=" rounded-xl border border-gray-400 flex gap-3 items-center px-4">
                                <button className="border-r border-gray-400 py-2 px-4">
                                    <Minus />
                                </button>
                                <p className="flex-grow py-2 px-4">1</p>
                                <button className="border-l border-gray-400 py-2 px-4">
                                    <Plus />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <h4>3500원</h4>
                                <button>
                                    <Trash2 className="text-red-600 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        {/* 카트3 */}
                        <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/fruits/fru_1.jpg"
                                    width={249}
                                    height={249}
                                    alt="alt text"
                                    className="rounded-xl w-20 h-20"
                                />
                                <div className="flex flex-col">
                                    <h2>딸기</h2>
                                    <small>오향딸기</small>
                                </div>
                            </div>
                            <div className=" rounded-xl border border-gray-400 flex gap-3 items-center px-4">
                                <button className="border-r border-gray-400 py-2 px-4">
                                    <Minus />
                                </button>
                                <p className="flex-grow py-2 px-4">1</p>
                                <button className="border-l border-gray-400 py-2 px-4">
                                    <Plus />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <h4>3500원</h4>
                                <button>
                                    <Trash2 className="text-red-600 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        {/* 쿠폰 */}
                        <div className="flex items-center gap-2 py-8">
                            <input
                                type="text"
                                id="email-address-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/1"
                                placeholder="쿠폰코드를 입력하세요."
                            />
                            <button className="py-2.5 px-6 rounded-lg shrink-0 bg-yellow-300 text-slate-600">
                                쿠폰 적용
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 sm:block overflow-hidden bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden p-5 dark:text-slate-100 font-bold">
                    <h2 className="text-2xl pb-3">총 합계</h2>
                    <div className="flex items-center justify-between border-b pb-6 border-slate-500">
                        <span>소계</span>
                        <span>3500원</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 ">
                        <span>세금</span>
                        <span>0원</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 ">
                        <span>배송비용</span>
                        <span>2000원</span>
                    </div>
                    <p className="border-b pb-6 border-slate-500 text-slate-400 font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Deserunt illum eum doloribus laudantium neque
                        eveniet
                    </p>
                    <div className="flex items-center justify-between py-4 ">
                        <span>합계</span>
                        <span>5500원</span>
                    </div>
                    <Link
                        href="#"
                        className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal">
                        계속 결제하기
                    </Link>
                </div>
            </div>
        </div>
    );
}
