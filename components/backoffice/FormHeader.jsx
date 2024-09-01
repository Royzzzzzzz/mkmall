import React from "react";
import { X } from "lucide-react";

export default function FormHeader({ title }) {
    return (
        <div className="flex items-center justify-between py-6 px-12 dark:bg-slate-600 rounded-lg bg-white text-slate-800 dark:text-slate-50 shadow">
            <h2 className="text-xl font-bold">{title}</h2>
            <button className="">
                <X />
            </button>
        </div>
    );
}
