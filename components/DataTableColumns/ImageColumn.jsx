import React from "react";

export default function ImageColumn({ row, accessorKey }) {
    const imageUrl = row.getValue(`${accessorKey}`);

    return (
        <div className="shrink-0">
            <img
                src={imageUrl}
                width={500}
                height={500}
                alt={`${accessorKey}`}
                className="w-24 h-24 rounded-full"
            />
        </div>
    );
}
