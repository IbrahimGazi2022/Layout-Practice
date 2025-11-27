import React, { useState } from 'react';

const LayoutOne = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full'>
            <div className='flex items-center justify-between max-w-7xl mx-auto py-4 px-4'>

                {/* -- LOGO -- */}
                <div className='w-18 h-10 bg-[#8e44ad] rounded-2xl'></div>

                {/* -- MENU DESKTOP -- */}
                <ul className='hidden md:flex flex-1 justify-center gap-4'>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                </ul>

                {/* -- HAMBURGER ICON -- */}
                <button className='md:hidden flex flex-col gap-1' onClick={() => setIsOpen(!isOpen)}>
                    <span className={`w-6 h-0.5 bg-[#8e44ad] transition-all duration-300 ${isOpen ? 'rotate-45 absolute' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-[#8e44ad] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-[#8e44ad] transition-all duration-300 ${isOpen ? '-rotate-45 absolute' : ''}`}></span>
                </button>
            </div>

            {/* -- MOBILE MENU -- */}
            {isOpen && (
                <ul className='md:hidden flex flex-col gap-2 px-4 pb-4'>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                    <li><a href="#" className='block bg-[#8e44ad] py-2 px-2 text-white font-bold rounded'>TEXT</a></li>
                </ul>
            )
            }
        </nav >
    );
};

export default LayoutOne;