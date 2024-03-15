import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import HoverIconWithTooltip from "../masonryGrid/HoverIconWithTooltip";

const ProductFilterGridItem = (props: any) => {
  const { imgSrc } = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    
  }


  return (
    <div className="cols-span-1 rows-span-1">
      <div
        className="h-72 w-40 md:h-80 md:w-64 lg:w-72 xl:h-96 xl:max-w-72 bg-cover bg-center bg-no-repeat hover:cursor-pointer md:hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"
        style={{
          backgroundImage: `url(${imgSrc})`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="w-full flex flex-col items-end justify-center pr-2 pt-4 gap-2"
          >
            <HoverIconWithTooltip Icon={HeartIcon} tooltipText="Lista de deseos" popover={true} position={{ right: '35px', top: '4px' }} />
            {
              isHovered && (
                <div className="hidden md:flex md:flex-col animate-fade-in animate-duration-300 z-50">
                  <HoverIconWithTooltip Icon={EyeIcon} tooltipText="View" popover={true} position={{ right: '35px', top: '4px' }} />
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
};

export default ProductFilterGridItem;
