import React from "react";
import Image from "next/image";

export default function ImageColumn({ row, accessorKey }) {
    const imageUrl = row.getValue(`${accessorKey}`);

    return (
        <div className="shrink-0">
            <Image
                src={imageUrl}
                width={96} // 24 * 4 (w-24 클래스에 해당하는 픽셀 값)
                height={96} // 24 * 4 (h-24 클래스에 해당하는 픽셀 값)
                alt={`${accessorKey}`}
                className="rounded-full"
                objectFit="cover" // 이미지를 컨테이너에 맞게 자르기
            />
        </div>
    );
}
