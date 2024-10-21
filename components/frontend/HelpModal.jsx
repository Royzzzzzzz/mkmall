"use client";

import { Button, Modal } from "flowbite-react";
import {
    CornerDownLeft,
    Headphones,
    HelpCircle,
    MessagesSquare,
    Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <button
                onClick={() => setOpenModal(true)}
                className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
                <HelpCircle />
                <span>도움말</span>
            </button>
            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                    {" "}
                    {/* 전체 화면을 덮는 어두운 배경 */}
                    <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                        className="w-1/2 mx-auto z-50"
                        dismissible={true}>
                        <Modal.Header className="px-6 py-3">
                            도움이 필요하다면 이곳을 클릭해주세요
                        </Modal.Header>
                        <Modal.Body>
                            <div className="grid grid-cols-2 gap-6">
                                <Link
                                    href="tel:123123"
                                    className="flex  items-center space-x-3 text-green-950 dark:text-slate-100">
                                    <div className="flex items-center w-10 h-10 bg-yellow-300 justify-center rounded-full">
                                        <Headphones className="w-6 h-6 text-yellow-800" />
                                    </div>
                                    <span>연락처: 01072317368</span>
                                </Link>
                                <Link
                                    href="/track"
                                    className="flex  items-center space-x-3 text-green-950 dark:text-slate-100">
                                    <div className="flex items-center w-10 h-10 bg-yellow-300 justify-center rounded-full">
                                        <Truck className="w-6 h-6 text-yellow-800" />
                                    </div>
                                    <span>주문 추적</span>
                                </Link>
                                <Link
                                    href="/"
                                    className="flex  items-center space-x-3 text-green-950 dark:text-slate-100">
                                    <div className="flex items-center w-10 h-10 bg-yellow-300 justify-center rounded-full">
                                        <CornerDownLeft className="w-6 h-6 text-yellow-800" />
                                    </div>
                                    <span>반품 요청</span>
                                </Link>
                                <Link
                                    href="tel:123123"
                                    className="flex  items-center space-x-3 text-green-950 dark:text-slate-100">
                                    <div className="flex items-center w-10 h-10 bg-yellow-300 justify-center rounded-full">
                                        <MessagesSquare className="w-6 h-6 text-yellow-800" />
                                    </div>
                                    <span>고객센터</span>
                                </Link>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            )}
        </>
    );
}
