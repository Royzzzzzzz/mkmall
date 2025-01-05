"use client";
import { Image } from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }>
                    카테고리
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "imageUrl",
        header: "카테고리 이미지",
        cell: ({ row }) => {
            const imageUrl = row.getValue("imageUrl");

            return <img src={imageUrl} className="w-24 h-24 rounded-full" />;
        },
    },
    // {
    //     accessorKey: "description",
    //     header: "설명",
    //     cell: ({ row }) => {
    //         const description = row.getValue("description");

    //         return <div className="line-clamp-1">{description}</div>;
    //     },
    // },
    {
        accessorKey: "isActive",
        header: "데이터 생성여부",
    },
    {
        accessorKey: "createdAt",
        header: "생성시간",
        cell: ({ row }) => {
            const createdAt = row.getValue("createdAt");
            const originalDate = new Date(createdAt);

            const day = originalDate.getDate();
            const month = originalDate.toLocaleString("default", {
                month: "short",
            });
            const year = originalDate.getFullYear();
            const formatted = ` ${year}년 ${month} ${day}일 `;

            return <div className="">{formatted}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const isActive = row.isActive;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(isActive)
                            }>
                            상태 복사하기
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>카테고리 삭제</DropdownMenuItem>
                        <DropdownMenuItem>카테고리 수정</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
