import React from "react";

const LayoutFour = () => {
    return (
        <div className="max-w-5xl h-auto bg-gray-200 mx-auto px-4 py-4 flex flex-col items-center justify-between">

            {/* -- NUMBER SECTION -- */}
            <div className="w-full flex justify-between items-start">
                <div className="flex-1"></div>
                <div className="bg-gray-400 w-20 h-8 rounded-2xl"></div>
                <div className="flex-1 flex justify-end">
                    <div className="bg-gray-400 w-46 h-8 rounded-xl"></div>
                </div>
            </div>

            {/* -- HEADING & SUBTITLE SECTION -- */}
            <div className="flex flex-col items-center gap-3">

                {/* -- MAIN TITLE */}
                <h1 className="uppercase font-extrabold text-3xl tracking-wide text-gray-500 mt-2">
                    heading text
                </h1>

                {/* -- SUB TITLE -- */}
                <div className="flex flex-col items-center gap-3">
                    <div className="w-64 h-0.5 bg-gray-500"></div>
                    <div className="w-48 h-0.5 bg-gray-500"></div>
                    <div className="w-64 h-0.5 bg-gray-500"></div>
                </div>
            </div>

            {/* -- INPUT FIELD SECTION -- */}
            <div className="w-full flex gap-4 mt-6">
                <div className="w-1/4 h-10 bg-white border-2 border-gray-400 rounded flex items-center justify-center">
                    <div className="w-26 h-0.5 bg-gray-400"></div>
                </div>
                <div className="w-3/4 h-10 bg-white border-2 border-gray-400 rounded flex items-center justify-center">
                    <div className="w-40 h-0.5 bg-gray-400"></div>
                </div>
                <div className="w-1/4 h-10 bg-white border-2 border-gray-400 rounded flex items-center justify-center">
                    <div className="w-26 h-0.5 bg-gray-400"></div>
                </div>
            </div>
        </div>
    );
};

export default LayoutFour;