import {
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from 'react';

const BigMasonryGridItem = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const { imgSrc } = props;
  return (
    <div
      className="col-span-6 row-span-2 w-full lg:h-192 h-56 hover:cursor-pointer hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-around p-2 bg-black bg-opacity-50 animate-fade-in animate-duration-300">
          <button className="bg-white p-2 rounded-full hover:bg-gray-200 hover:text-primary-500"><EyeIcon className='h-6 w-6'/></button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-200 hover:text-primary-500"><ShoppingCartIcon className='h-6 w-6'/></button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-200 hover:text-primary-500"><HeartIcon className='h-6 w-6'/></button>
        </div>
      )}
    </div>
  );
};

export default BigMasonryGridItem;
