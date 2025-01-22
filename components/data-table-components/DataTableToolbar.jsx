"use client";

import { Table } from "@tanstack/react-table";
import { Cross, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./DataTableViewOptions";

// export function DataTableToolbar({ table }) {
//     const isFiltered = table.getState().columnFilters.length > 0;

//     return (
//         <div className="flex items-center justify-between">
//             <div className="flex flex-1 items-center space-x-2">
//                 <Input
//                     placeholder="검색어를 입력해주세요"
//                     value={table.getColumn("title")?.getFilterValue() ?? ""}
//                     onChange={(event) =>
//                         table
//                             .getColumn("title")
//                             ?.setFilterValue(event.target.value)
//                     }
//                     className="h-8 w-[150px] lg:w-[250px]"
//                 />
//                 {isFiltered && (
//                     <Button
//                         variant="ghost"
//                         onClick={() => table.resetColumnFilters()}
//                         className="h-8 px-2 lg:px-3">
//                         Reset
//                         <X />
//                     </Button>
//                 )}
//             </div>
//             <DataTableViewOptions table={table} />
//         </div>
//     );
// }

export function DataTableToolbar({ table, filterKeys }) {
    // 어떤 키값이 있으면
    const isFiltered = filterKeys.some(
        (key) => table.getState().columnFilters[key]?.length > 0
    );

    const handleInputChange = (key, value) => {
        table.getColumn(key)?.setFilterValue(value);
    };

    const handleResetClick = () => {
        filterKeys.forEach((key) => {
            table.getColumn(key)?.setFilterValue("");
        });
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {filterKeys.map((key) => (
                    <Input
                        key={key}
                        placeholder={`Filter ${key}...`}
                        value={table.getColumn(key)?.getFilterValue() ?? ""}
                        onChange={(event) =>
                            handleInputChange(key, event.target.value)
                        }
                        className="h-8 w-[150px] lg:w-[250px]"
                    />
                ))}

                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={handleResetClick}
                        className="h-8 px-2 lg:px-3">
                        Reset
                        <Cross className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}
