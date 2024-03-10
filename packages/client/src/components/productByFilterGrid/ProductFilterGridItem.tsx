import React from 'react'

const ProductFilterGridItem = (props: any) => {
    const { imgSrc } = props;
  return (
    <div 
    className="h-96 w-80 bg-cover bg-center bg-no-repeat hover:cursor-pointer md:hover:scale-105 hover:transition-transform hover:z-50 duration-500 ease-in-out relative lg:flex lg:flex-col lg:justify-between"         
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundRepeat: "no-repeat",
    }}>
    </div>
  )
}

export default ProductFilterGridItem