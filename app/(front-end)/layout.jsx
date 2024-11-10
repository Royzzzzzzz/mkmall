import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl py-6 mx-auto lg-px-0">{children}</div>
        </div>
    );
}
