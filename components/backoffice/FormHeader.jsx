"use client";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }) {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between px-12 py-6 mb-12 bg-white rounded-lg shadow dark:bg-slate-600 text-slate-800 dark:text-slate-50">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={() => router.back()} className="">
                <X />
            </button>
        </div>
    );
}
