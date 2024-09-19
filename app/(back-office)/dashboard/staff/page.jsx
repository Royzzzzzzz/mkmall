import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";

export default function Coupons() {
  return (
    <div>
      {/* 헤더 */}
      <PageHeader
        heading="직원관리"
        href="/dashboard/staff/new"
        linkTitle="직원 추가"
      />
      {/* 테이블 */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">테이블표</div>
    </div>
  );
}
