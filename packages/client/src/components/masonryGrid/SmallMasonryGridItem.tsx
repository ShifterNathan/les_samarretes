import {
  HeartIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from 'react';
import HoverIconWithTooltip from "./HoverIconWithTooltip";

const SmallMasonryGridItem = (props: any) => {
  const { imgSrc } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full h-64 hover:cursor-pointer object-cover bg-cover md:hover:scale-110 transition-transform duration-500 ease-in-out relative"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: 'no-repeat',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="hidden md:flex absolute top-0 left-0 right-0 justify-around p-2 bg-black bg-opacity-50 animate-fade-in animate-duration-300">
            <HoverIconWithTooltip Icon={EyeIcon} tooltipText="View" />
            <HoverIconWithTooltip Icon={HeartIcon} tooltipText="Like" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallMasonryGridItem;
