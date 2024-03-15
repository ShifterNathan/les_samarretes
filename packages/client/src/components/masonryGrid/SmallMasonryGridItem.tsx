import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import HoverIconWithTooltip from "./HoverIconWithTooltip";
import { useNavigate } from "react-router-dom";
import MasonryItemProductPopover from "./MasonryItemProductPopover";
import { IMasonryGridItem } from "../../interfaces/MasonryGrid/IMasonryGridItem";

const SmallMasonryGridItem = (props: IMasonryGridItem) => {
  const { imgSrc, title, description, priceRange } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [showProductPopover, setShowProductPopover] = useState(false);
  const navigate = useNavigate();
  
  const togglePopover = () => {
    setShowProductPopover(!showProductPopover);
    setIsHovered(false);
  }

  const handleNavigation = (e: any, action: any, path?: any) => {
    e.stopPropagation();
  
    switch (action) {
      case "popover":
        togglePopover();
        break;
      case "wishlist":
        console.log("Add to wishlist");
        break;
      default:
        navigate(path);
    }
  }
  

  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full h-96 md:h-144 lg:h-96 hover:cursor-pointer object-cover bg-cover md:hover:scale-110 transition-transform duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => handleNavigation(e, "bg", "/product/1")}
        >
        {isHovered && (
          <>
            <div className="hidden md:flex justify-around p-2 bg-white animate-fade-in animate-duration-300 z-50">
              <HoverIconWithTooltip Icon={EyeIcon} tooltipText="View" handleClick={handleNavigation} popover={true} position={{ bottom: '50px' }} />
              <HoverIconWithTooltip Icon={HeartIcon} tooltipText="Like" handleClick={handleNavigation} position={{ bottom: '50px' }} />
            </div>
            <div className="hidden md:flex p-4 bg-white flex-col items-center justify-center animate-fade-in animate-duration-300 h-20">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="text-sm">{priceRange}</p>
            </div>
          </>
        )}
        <MasonryItemProductPopover showProductPopover={showProductPopover} setShowProductPopover={togglePopover} />
      </div>
    </div>
  );
};

export default SmallMasonryGridItem;
