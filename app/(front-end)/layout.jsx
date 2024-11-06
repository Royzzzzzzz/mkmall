import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl py-6 mx-auto">{children}</div>
    </div>
  );
}
