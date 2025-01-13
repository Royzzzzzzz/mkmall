import React from "react";

export default function DateColumn({ row, accessorKey }) {
    const createdAt = row.getValue(`${accessorKey}`);
    const originalDate = new Date(createdAt);

    const day = originalDate.getDate();
    const month = originalDate.toLocaleString("default", {
        month: "short",
    });
    const year = originalDate.getFullYear();
    const formatted = ` ${year}년 ${month} ${day}일 `;
    return <div className="">{formatted}</div>;
}
