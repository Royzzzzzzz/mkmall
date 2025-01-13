"use client";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ActionColumn from "@/components/data-table-components/ActionColumn";
export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => <SortableColumn column={column} title="제목" />,
    },
    {
        accessorKey: "couponCode",
        header: "쿠폰 링크",
    },

    {
        accessorKey: "expiryDate",
        header: "쿠폰 만료 날짜",
        cell: ({ row }) => <DateColumn row={row} accessorKey="expiryDate" />,
    },
    {
        accessorKey: "isActive",
        header: "데이터 생성여부",
    },

    {
        accessorKey: "createdAt",
        header: "쿠폰 생성시간",
        cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    },
    {
        id: "actions",
        cell: ({ row }) => <ActionColumn row={row} title="쿠폰" />,
    },
];
