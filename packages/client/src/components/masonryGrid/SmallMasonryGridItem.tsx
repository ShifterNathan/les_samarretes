import {
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from 'react';

const SmallMasonryGridItem = (props: any) => {
  const { imgSrc } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:col-span-2 lg:row-span-1 col-span-6 row-span-2">
      <div
        className="w-full lg:h-64 h-56 hover:cursor-pointer object-cover bg-cover hover:scale-110 transition-transform duration-500 ease-in-out relative"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: 'no-repeat',
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
    </div>
  );
};

export default SmallMasonryGridItem;
