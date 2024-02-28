import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import HoverIconWithTooltip from "./HoverIconWithTooltip";
import { useNavigate } from "react-router-dom";

const SmallMasonryGridItem = (props: any) => {
  const { imgSrc, title, description, priceRange } = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = (e: any, path: any) => {
    e.stopPropagation(); // This stops the click from triggering the parent's onClick
    navigate(path);
  };

  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full h-64 hover:cursor-pointer object-cover bg-cover md:hover:scale-110 transition-transform duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("/cart")}
      >
        {isHovered && (
          <>
            <div className="hidden md:flex justify-around p-2 bg-white animate-fade-in animate-duration-300 z-50">
              <HoverIconWithTooltip Icon={EyeIcon} tooltipText="View" handleClick={handleIconClick} />
              <HoverIconWithTooltip Icon={HeartIcon} tooltipText="Like" handleClick={handleIconClick} />
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
