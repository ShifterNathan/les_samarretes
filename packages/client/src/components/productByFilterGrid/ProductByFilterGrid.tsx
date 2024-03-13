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
    "https://source.unsplash.com/random/1",
    "https://source.unsplash.com/random/2",
    "https://source.unsplash.com/random/3",
    "https://source.unsplash.com/random/4",
    "https://source.unsplash.com/random/5",
    "https://source.unsplash.com/random/6",
    "https://source.unsplash.com/random/7",
    "https://source.unsplash.com/random/8",
    "https://source.unsplash.com/random/9",
    "https://source.unsplash.com/random/10",
    "https://source.unsplash.com/random/11",
    "https://source.unsplash.com/random/12",
  ];

  return (
      <div
        className={`w-10/12 flex flex-col items-center justify-center ${className}`}
      >
        <h3 className="text-3xl font-bold">Trendy Item</h3>
        <div className="relative pb-4">
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
          className={`w-full grid grid-cols-2 grid-rows-6 xl:grid-cols-4 xl:grid-rows-3 gap-4 place-items-center`}
        >
          {imageSources.map((imgSrc, i) => {
            return <ProductFilterGridItem imgSrc={imgSrc} />;
          })}
        </div>
      </div>
  );
};

export default ProductByFilterGrid;
