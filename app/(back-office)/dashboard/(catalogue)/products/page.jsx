import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import DataTable from "../../../../../components/data-table-components/DataTable";

export default async function products() {
    const products = await getData("products");
    console.log("debug products : ", products);
    console.log("database ", process.env.DATABASE_URL);
    return (
        <div>
            {/* 헤더 */}
            <PageHeader
                heading="Products"
                href="/dashboard/products/new"
                linkTitle="상품 추가"
            />
            {/* <div className="py-8">
                <DataTable data={products} columns={columns} />
            </div> */}
        </div>
    );
}
