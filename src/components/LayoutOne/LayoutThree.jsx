import React from "react";
import ProductCard from "./ProductCard";

const LayoutThree = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default LayoutThree;