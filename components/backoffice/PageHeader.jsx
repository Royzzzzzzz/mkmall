import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import Heading from "@/components/backoffice/Heading";

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={heading} />
      <Link
        className="text-slate-800 bg-yellow-300 hover:bg-yellow-300/90 focus:ring-4 focus:outline-none focus:ring-yellow-300/50  rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-yellow-300/55 me-2 mb-2 text-base font-bold"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
