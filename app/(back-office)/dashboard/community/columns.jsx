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
        accessorKey: "title",
        header: ({ column }) => (
            <SortableColumn column={column} title="Title" />
        ),
    },
    {
        accessorKey: "imageUrl",
        header: "상품 이미지",
        cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
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
        cell: ({ row }) => {
            const training = row.original;
            return (
                <ActionColumn
                    row={row}
                    title="교육"
                    editEndpoint={`trainings/update/${training.id}`}
                    endpoint={`trainings/${training.id}`}
                />
            );
        },
    },
];
