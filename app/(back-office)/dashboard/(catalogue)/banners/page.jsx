import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Plus, Trash2, Search, Download } from "lucide-react";
import React from "react";

export default function pages() {
  return (
    <div>
      {/* 헤더 */}
      <PageHeader
        heading="배너"
        href="/dashboard/banners/new"
        linkTitle="배너 추가"
      />
      {/* 테이블 */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">테이블표</div>
    </div>
  );
}
