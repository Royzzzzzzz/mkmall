import React from "react";
import { Sun, Bell, User, AlignJustify } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-slate-700 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full">
            {/* 아이콘 */}
            <button>
                <AlignJustify />
            </button>
            {/* 3 아이콘 */}
            <div className="flex space-x-3">
                <button>
                    <Sun />
                </button>
                <button>
                    <Bell />
                </button>
                <button>
                    <User />
                </button>
            </div>
        </div>
    );
}
