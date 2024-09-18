"use client";
export default function TextareaInput({ label, name, register, errors, isRequired = true, className = "sm:col-span-2" }) {
    return (
        <div className={className}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium leading-6 text-gray-900 dark:text-slate-50">
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    {...register(`${name}`, { required: isRequired })}
                    name={name}
                    id={name}
                    rows={3}
                    className="block w-full py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-slate-500 focus:ring-yellow-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                    defaultValue={""}
                    placeholder={`${label.toLowerCase()}을/를 입력하세요`}
                />
                {errors[`${name}`] && <span className="text-sm text-red-600 ">{label}이/가 누락되었습니다</span>}
            </div>
        </div>
    );
}
