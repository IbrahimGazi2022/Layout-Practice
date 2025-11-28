import React from "react";

const LayoutTwo = () => {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto p-4 gap-4 grid grid-cols-1 md:grid-cols-[70%_30%]">

                {/* -- SLIDER AREA -- */}
                <div className="bg-[#8e44ad] h-96">
                    <p className="p-4 font-bold"></p>
                </div>

                {/* -- RIGHT SIDE AREA -- */}
                <div className="bg-gray-300 h-96 flex flex-col gap-4">
                    <div className="bg-[#8e44ad] h-48"></div>
                    <div className="bg-[#8e44ad] h-48"></div>
                </div>
            </div>
        </section>
    );
};

export default LayoutTwo;