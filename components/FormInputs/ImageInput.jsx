import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast"; // toast 임포트 추가

export default function ImageInput({
    label,
    imageUrl = "",
    setImageUrl,
    className = "col-span-full",
    endpoint = "imageUploader",
}) {
    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-4">
                <label
                    htmlFor="course-image"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 dark:text-slate-50">
                    {label}
                </label>
                {imageUrl && (
                    <button
                        onClick={() => setImageUrl("")}
                        type="button"
                        className="flex px-4 py-2 space-x-2 rounded-md shadow bg-slate-900 text-slate-50">
                        <Pencil className="w-5 h-5" />
                        <span>이미지 교체</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt="Item image"
                    width={1000}
                    height={667}
                    className="object-contain w-full h-64"
                />
            ) : (
                <UploadDropzone
                    endpoint={endpoint}
                    onClientUploadComplete={(res) => {
                        setImageUrl(res[0].url);
                        // Do something with the response
                        toast.success("이미지 업로드 완료");
                        console.log("Files: ", res);
                        console.log("Upload Completed");
                    }}
                    onUploadError={(error) => {
                        // Do something with the error.
                        toast.error("이미지 업로드 실패, 다시 시도해 주세요");
                        console.log(`ERROR! ${error.message}`, error);
                    }}
                />
            )}
        </div>
    );
}
