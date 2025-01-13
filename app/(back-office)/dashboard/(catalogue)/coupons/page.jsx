import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Coupons() {
    const coupons = await getData("coupons");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="쿠폰"
                href="/dashboard/coupons/new"
                linkTitle="쿠폰 추가"
            />

            <div className="py-8">
                <DataTable data={coupons} columns={columns} />
            </div>
        </div>
    );
}
