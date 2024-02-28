import React, { useState } from 'react'

const HoverIconWithTooltip = (props: any) => {
    const { Icon, iconClass, tooltipText, handleClick } = props;
    const [showTooltip, setShowTooltip] = useState(false);
  
    return (
      <div className="relative flex flex-col items-center hover:text-primary-500 transition-colors duration-200">
        <button
          className="bg-gray-800 p-2 rounded-full hover:bg-gray-900 hover:text-primary-500 transition-colors duration-200"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={(e) => handleClick(e, `/signup`)}
        >
          <Icon className={`${iconClass ? iconClass : 'h-4 w-4'} text-white `} />
        </button>
        {showTooltip && (
          <div className="flex items-center justify-center absolute p-1 text-xs rounded bg-black text-white w-auto whitespace-nowrap" style={{ bottom: '50px'}}>
            {tooltipText}
          </div>
          
        )}
      </div>
    );
  };
  
export default HoverIconWithTooltip
