import React from "react";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import DashboardChats from "@/components/backoffice/DashboardChats";
import CustomDataTable from "@/components/backoffice/CustomDataTable";

export default function page() {
  return (
    <div>
      <Heading title="대쉬보드" />
      {/* 큰 카드 */}
      <LargeCards />
      <SmallCards />
      <DashboardChats />
      {/* 최근 주문 */}
      <CustomDataTable />
    </div>
  );
}
