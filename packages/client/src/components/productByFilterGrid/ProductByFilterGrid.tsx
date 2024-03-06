import React from "react";

const ProductByFilterGrid = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
        <div className="flex">
            <button type="button" className="text-gray-600 hover:text-black border border-primary-500 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center" >Hola</button>
            <button type="button" className="text-gray-600 hover:text-black px-5 py-2.5 text-center border-primary-500" >Hola</button>
            <button type="button" className="text-gray-600 hover:text-black px-5 py-2.5 text-center border-primary-500" >Hola</button>
            <button type="button" className="text-gray-600 hover:text-black px-5 py-2.5 text-center border-primary-500" >Hola</button>
            <button type="button" className="text-gray-600 hover:text-black px-5 py-2.5 text-center border-primary-500 focus:underline" >Hola</button>
        </div>
    </div>
  );
};

export default ProductByFilterGrid;
