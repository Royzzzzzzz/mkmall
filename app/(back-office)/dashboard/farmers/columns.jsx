"use client";
import { Image } from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import DataColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
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
        accessorKey: "contactPerson",
        header: ({ column }) => <SortableColumn column={column} title="성함" />,
    },
    {
        accessorKey: "profileImageUrl",
        header: "프로필 이미지",
        cell: ({ row }) => (
            <ImageColumn row={row} accessorKey="profileImageUrl" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <SortableColumn column={column} title="이메일" />
        ),
    },
    {
        accessorKey: "isActive",
        header: "데이터 생성여부",
    },
    {
        accessorKey: "createdAt",
        header: "생성시간",
        cell: ({ row }) => <DataColumn row={row} accessorKey="createdAt" />,
    },
    {
        id: "actions",
        cell: ({ row }) => <ActionColumn row={row} title="상품" />,
    },
];
