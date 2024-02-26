import SmallMasonryGridItem from "./SmallMasonryGridItem";
import BigMasonryGridItem from "./BigMasonryGridItem";
import { useEffect } from "react";

const MasonryGrid = () => {
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
    "https://source.unsplash.com/random/13",
    "https://source.unsplash.com/random/14",
    "https://source.unsplash.com/random/15",
    "https://source.unsplash.com/random/16",
  ];

  useEffect(() => {
    setTimeout(() => {
      console.log("MasonryGrid rendered");
    }, 500)
  })

    return (
      <div className="flex items-center justify-center">
        <div
          className="w-full grid grid-cols-12 auto-rows-auto gap-4 mx-auto px-4"
          style={{ maxWidth: "1400px" }}
        >
          <SmallMasonryGridItem imgSrc={imageSources[0]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[1]}/>
          <SmallMasonryGridItem imgSrc={imageSources[2]}/>
          <BigMasonryGridItem imgSrc={imageSources[3]}/>
          <BigMasonryGridItem imgSrc={imageSources[4]}/>
          <SmallMasonryGridItem imgSrc={imageSources[5]}/>
          <SmallMasonryGridItem imgSrc={imageSources[6]}/>
          <SmallMasonryGridItem imgSrc={imageSources[7]}/>
          <SmallMasonryGridItem imgSrc={imageSources[8]}/>
          <SmallMasonryGridItem imgSrc={imageSources[9]} />
          <SmallMasonryGridItem imgSrc={imageSources[10]} />
          <BigMasonryGridItem imgSrc={imageSources[11]} />
          <BigMasonryGridItem imgSrc={imageSources[12]} />
          <SmallMasonryGridItem imgSrc={imageSources[13]} />
          <SmallMasonryGridItem imgSrc={imageSources[14]} />
          <SmallMasonryGridItem imgSrc={imageSources[15]} />
        </div>
      </div>
    );
  };

export default MasonryGrid;
