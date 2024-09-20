import React from "react";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // SSR을 비활성화
});

export default function QuillEditor({
  label,
  className = "sm:col-span-2",
  value,
  onChange,
}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block w-full py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-slate-500 focus:ring-yellow-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
      >
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
