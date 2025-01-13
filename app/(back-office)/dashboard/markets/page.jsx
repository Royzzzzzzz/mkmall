import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { columns } from "./columns";
import { getData } from "@/lib/getData";

export default async function pages() {
    const markets = await getData("markets");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="마켓"
                href="/dashboard/markets/new"
                linkTitle="마켓 추가"
            />
            <div className="py-8">
                <DataTable data={markets} columns={columns} />
            </div>
        </div>
    );
}
