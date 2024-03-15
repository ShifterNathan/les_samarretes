import React, { useState } from 'react'

const HoverIconWithTooltip = (props: any) => {
    const { Icon, iconClass, tooltipText, handleClick, popover, position } = props;
    const [showTooltip, setShowTooltip] = useState(false);

    const handleAction = (e: any, action: any) => {
      e.stopPropagation();
      handleClick(e, action);
    }
  
    return (
      <div className="relative flex flex-col items-center hover:text-primary-500 transition-colors duration-200">
        <button
          className="bg-gray-800 p-2 rounded-full hover:bg-gray-900 hover:text-primary-500 transition-colors duration-200"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={(e) => handleAction(e, popover ? "popover" : "wishlist")}
        >
          <Icon className={`${iconClass ? iconClass : 'h-4 w-4'} text-white `} />
        </button>
        {showTooltip && (
          <div className="flex items-center justify-center absolute p-1 text-xs rounded bg-black text-white w-auto whitespace-nowrap" style={position}>
            {tooltipText}
          </div>
          
        )}
      </div>
    );
  };
  
export default HoverIconWithTooltip
