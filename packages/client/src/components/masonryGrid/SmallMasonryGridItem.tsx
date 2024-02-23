import React from "react";

const SmallMasonryGridItem = (props: any) => {
  const { imgSrc } = props;
  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full lg:h-64 h-56 hover:cursor-pointer object-cover bg-cover"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default SmallMasonryGridItem;
