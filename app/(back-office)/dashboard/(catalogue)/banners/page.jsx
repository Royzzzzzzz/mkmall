import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import { DataTable } from "../../payments/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function pages() {
    const banners = await getData("banners");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="배너"
                href="/dashboard/banners/new"
                linkTitle="배너 추가"
            />

            <div className="py-8">
                <DataTable data={banners} columns={columns} />
            </div>
        </div>
    );
}
