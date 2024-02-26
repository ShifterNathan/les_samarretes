import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import HoverIconWithTooltip from "./HoverIconWithTooltip";

const SmallMasonryGridItem = (props: any) => {
  const { imgSrc, title, description, priceRange } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full h-64 hover:cursor-pointer object-cover bg-cover md:hover:scale-110 transition-transform duration-500 ease-in-out relative lg:flex lg:flex-col justify-between"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <>
            <div className="hidden md:flex justify-around p-2 bg-white animate-fade-in animate-duration-300">
              <HoverIconWithTooltip Icon={EyeIcon} tooltipText="View" />
              <HoverIconWithTooltip Icon={HeartIcon} tooltipText="Like" />
            </div>
            <div className="hidden md:flex p-4 bg-white flex-col items-center justify-center animate-fade-in animate-duration-300 h-20">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="text-sm">{priceRange}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SmallMasonryGridItem;
