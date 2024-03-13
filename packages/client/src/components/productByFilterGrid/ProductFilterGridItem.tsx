import React from "react";

const ProductFilterGridItem = (props: any) => {
  const { imgSrc } = props;
  return (
    <div className="cols-span-1 rows-span-1">
      <div
        className="h-80 w-40 md:h-96 md:w-72 md:h-128 lg:w-96 xl:h-144 xl:w-96 bg-cover bg-center bg-no-repeat hover:cursor-pointer md:hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default ProductFilterGridItem;
