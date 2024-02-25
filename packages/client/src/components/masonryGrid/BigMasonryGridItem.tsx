import {
  HeartIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from 'react';
import HoverIconWithTooltip from "./HoverIconWithTooltip";

const BigMasonryGridItem = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const { imgSrc } = props;
  return (
    <div
      className="col-span-6 row-span-2 w-full lg:h-192 h-64 hover:cursor-pointer md:hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 flex justify-around p-2 bg-black bg-opacity-50 animate-fade-in animate-duration-300">
          <HoverIconWithTooltip Icon={EyeIcon} iconClass={'h-6 w-6'} tooltipText="View" />
          <HoverIconWithTooltip Icon={HeartIcon} iconClass={'h-6 w-6'} tooltipText="Like" />
        </div>
      )}
    </div>
  );
};

export default BigMasonryGridItem;
