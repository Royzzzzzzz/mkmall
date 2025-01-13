import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Coupons() {
    const farmers = await getData("farmers");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="공급업체"
                href="/dashboard/farmers/new"
                linkTitle="공급업체 추가"
            />
            <div className="py-8">
                <DataTable
                    data={farmers}
                    columns={columns}
                    filterKeys={["name"]}
                />
            </div>
        </div>
    );
}
