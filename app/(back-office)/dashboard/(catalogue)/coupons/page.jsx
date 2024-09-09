import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";

export default function Coupons() {
    return (
        <div>
            {/* 헤더 */}
            <PageHeader heading="쿠폰" href="/dashboard/coupons/new" linkTitle="쿠폰 추가" />
            {/* 테이블 */}
            {/* Export || Search || Bulk Delete */}
            <TableActions />
            <div className="py-8">테이블표</div>
        </div>
    );
}
