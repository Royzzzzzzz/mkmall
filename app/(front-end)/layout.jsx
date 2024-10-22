import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl py-6">{children}</div>
        </div>
    );
}
