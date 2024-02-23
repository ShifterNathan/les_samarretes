import React from "react";

const BigMasonryGridItem = (props: any) => {
  const { imgSrc } = props;
  return (
    <div
      className="col-span-6 row-span-2 w-full lg:h-192 h-56 object-cover hover:cursor-pointer object-cover"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default BigMasonryGridItem;
