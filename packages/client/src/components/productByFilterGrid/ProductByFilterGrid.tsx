import React, { useEffect, useRef, useState } from "react";
import ProductFilterGridItem from "./ProductFilterGridItem";

const ProductByFilterGrid = (props: any) => {
  const { className } = props;

  type TabsRef = {
    [key: string]: HTMLButtonElement | null;
  };

  const [activeTab, setActiveTab] = useState("ALL");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef<TabsRef>({});
  const tabs = ["ALL", "WOMAN", "MAN", "ON SALE", "NEW"];

  const updateUnderlineStyle = (tab: any) => {
    const tabRef = tabsRef.current[tab];
    const styles = {
      left: tabRef?.offsetLeft + "px",
      width: tabRef?.offsetWidth + "px",
    };
    setUnderlineStyle(styles);
  };

  useEffect(() => {
    updateUnderlineStyle(activeTab);
  }, [activeTab]);

  const imageSources = [
    {
      imgSrc: "https://source.unsplash.com/random/1",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/2",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/3",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/4",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/5",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/6",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/7",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
    {
      imgSrc: "https://source.unsplash.com/random/8",
      productCategory: "ACCESORIOS, BOLSAS",
      productName: "STAU774 – RE-Tote Bag",
      productPrice: "7.95€ IVA",
    },
  ];
  return (
    <div
      className={` w-9/12 flex flex-col items-center justify-center ${className}`}
    >
      <h3 className="text-3xl font-bold pb-2">Trendy Item</h3>
      <div className="relative pb-6">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => (tabsRef.current[tab] = el)}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          className="absolute h-1 bg-black transition-all duration-300 ease-out"
          style={{ ...underlineStyle }}
        />
      </div>
      <div
        className={`w-full grid grid-cols-2 grid-rows-4 gap-x-10 gap-y-4 md:gap-x-0 place-items-center xl:grid-cols-4 xl:grid-rows-2`}
      >
        {imageSources.map((product, i) => {
          return (
            <section className="flex flex-col">
              <ProductFilterGridItem imgSrc={product.imgSrc} />
              <div className="flex w-full flex-col items-start justify-center">
                <h5>{product.productCategory}</h5>
                <h3>{product.productName}</h3>
                <p>{product.productPrice}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductByFilterGrid;
