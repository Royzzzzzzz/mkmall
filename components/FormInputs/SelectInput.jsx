import React from "react"; // React 라이브러리를 불러옵니다.

export default function SelectInput({ label, name, register, className = "sm:col-span-2", options = [], multiple = false }) {
    // SelectInput 컴포넌트를 선언합니다.
    // props로 label, name, register, className, options를 받습니다.
    // register: React Hook Form과 연동하기 위한 함수 (유효성 검사 등을 위해 사용)
    // options: 드롭다운에 표시될 옵션 리스트

    return (
        <div className={className}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium leading-6 text-gray-900 dark:text-slate-50">
                {label}
            </label>

            <div className="mt-2">
                <select {...register(`${name}`)} id={name} name={name} multiple={multiple} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    {/* <select> 태그는 드롭다운 메뉴를 생성하는 요소입니다.
                    {...register(`${name}`)}는 React Hook Form과 연동을 위한 코드입니다.
                    이렇게 함으로써 이 입력 필드가 폼의 유효성 검사 및 상태 관리에 포함됩니다.
                    id와 name 속성은 <label>과 연결되며, name은 드롭다운에서 선택한 값을 서버로 보낼 때도 사용됩니다.
                    className은 Tailwind CSS를 사용하여 스타일을 설정합니다.*/}
                    {options.map((option, i) => {
                        // options 배열을 순회하여 <option> 태그들을 동적으로 생성합니다.
                        // 각 옵션은 객체로 이루어져 있으며, 그 객체의 id와 title을 사용합니다.
                        return (
                            <option key={i} value={option.id}>
                                {option.title}
                            </option>
                        );
                        // <option> 태그는 각각의 선택 가능한 항목을 나타냅니다.
                        // key={i}: React에서 배열을 렌더링할 때 고유한 key가 필요하므로 배열의 인덱스 i를 key로 사용합니다.
                        // value={option.id}: 사용자가 이 옵션을 선택했을 때 서버로 전송되는 값입니다.
                        // {option.title}: 드롭다운 메뉴에 표시되는 텍스트입니다.
                    })}
                </select>
            </div>
        </div>
    );
}
