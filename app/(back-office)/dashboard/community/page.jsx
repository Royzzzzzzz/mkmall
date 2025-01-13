import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { columns } from "./columns";
import { getData } from "@/lib/getData";

export default async function pages() {
    const trainings = await getData("trainings");
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="MK 커뮤니티 트레이닝"
                href="/dashboard/community/new"
                linkTitle="트레이닝 추가"
            />
            <div className="py-8">
                <DataTable data={trainings} columns={columns} />
            </div>
        </div>
    );
}
