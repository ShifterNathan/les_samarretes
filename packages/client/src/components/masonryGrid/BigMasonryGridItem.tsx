import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import HoverIconWithTooltip from "./HoverIconWithTooltip";
import { useNavigate } from "react-router-dom";
import MasonryItemProductPopover from "./MasonryItemProductPopover";

const BigMasonryGridItem = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showProductPopover, setShowProductPopover] = useState(false);
  const navigate = useNavigate();

  const togglePopover = () => {
    setShowProductPopover(!showProductPopover);
    setIsHovered(false);
  };

  const handleNavigation = (e: any, action: any, path?: any) => {
    e.stopPropagation();
    if (action === "popover") {
      togglePopover();
    } else if (action === "wishlist") {
      console.log("Add to wishlist");
    } else {
      navigate(path);
    }
  };

  const { imgSrc, title, description, priceRange } = props;
  return (
    <div
      className="col-span-6 row-span-2 w-full lg:h-192 h-64 hover:cursor-pointer md:hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => handleNavigation(e, "bg", "/product/1")}
    >
      {isHovered && (
        <>
          <div className="hidden md:flex justify-around p-2 bg-white animate-fade-in animate-duration-300">
            <HoverIconWithTooltip
              Icon={EyeIcon}
              tooltipText="View"
              handleClick={handleNavigation}
              popover={true}
            />
            <HoverIconWithTooltip
              Icon={HeartIcon}
              tooltipText="Like"
              handleClick={handleNavigation}
            />
          </div>
          <div className="hidden md:flex p-4 bg-white flex-col items-center justify-center animate-fade-in animate-duration-300 h-40">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm">{priceRange}</p>
          </div>
        </>
      )}
      <MasonryItemProductPopover
        showProductPopover={showProductPopover}
        setShowProductPopover={togglePopover}
      />
    </div>
  );
};

export default BigMasonryGridItem;
