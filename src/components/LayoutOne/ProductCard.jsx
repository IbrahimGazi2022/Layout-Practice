import React from 'react';

const ProductCard = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-96 bg-gray-200 mx-auto flex flex-col gap-4 p-4">

                {/* -- IMAGE AREA -- */}
                <div className="h-48 bg-gray-400 rounded-lg"></div>

                {/* -- CONTENT AREA -- */}
                <div className="flex flex-col gap-1 items-center">
                    <h3 className="text-xl font-semibold">Product Title</h3>
                    <p className="text-2xl text-red-600 font-bold">$99.99</p>
                </div>

                {/* -- CART BUTTON -- */}
                <button className="bg-blue-500 text-white py-2 rounded">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
