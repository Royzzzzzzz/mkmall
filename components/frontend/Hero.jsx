import React from "react";

export default function Hero() {
    return (
        <div className="flex gap-8">
            <div className="w-1/3 max-w-sm  bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden ">
                <h2 className="bg-slate-100 py-3 px-6 font-semibold border-b border-gray-300">
                    카테고리
                </h2>
                <div className="py-3 px-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos a quaerat aut harum, itaque similique pariatur
                    iste rem enim eos quam illo voluptatem assumenda doloremque
                    neque expedita ipsum laborum repudiandae?
                </div>
            </div>
            <div className="w-2/3 bg-blue-500 rounded-md">carousel</div>
        </div>
    );
}
