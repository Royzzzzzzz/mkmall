import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function pages() {
    const categories = await getData("categories");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="카테고리"
                href="/dashboard/categories/new"
                linkTitle="카테고리 추가"
            />
            {/* 테이블 */}
            {/* Export || Search || Bulk Delete */}
            {/* <TableActions /> */}
            <div className="py-8">
                <DataTable data={categories} columns={columns} />
            </div>
        </div>
    );
}
