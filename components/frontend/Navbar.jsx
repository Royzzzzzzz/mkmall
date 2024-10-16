import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/mkmall_logo.png";
export default function Navbar() {
    return (
        <div className="bg-gray-50">
            <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
                {/* Logo */}
                <Link className="" href="/">
                    <Image src={logo} alt="limifood logo" className="w-24" />
                </Link>
                {/* SEARCH */}
                <div className="flex-grow">
                    <SearchForm />
                </div>
            </div>
        </div>
    );
}
