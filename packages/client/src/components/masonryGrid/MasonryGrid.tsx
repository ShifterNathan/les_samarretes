import SmallMasonryGridItem from "./SmallMasonryGridItem";
import BigMasonryGridItem from "./BigMasonryGridItem";

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

    return (
      <div className="flex items-center justify-center">
        <div
          className="w-9/12 grid grid-cols-12 auto-rows-auto gap-4"
        >
          <SmallMasonryGridItem imgSrc={imageSources[0]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[1]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[2]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <BigMasonryGridItem imgSrc={imageSources[3]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <BigMasonryGridItem imgSrc={imageSources[4]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[5]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[6]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[7]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[8]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"}/>
          <SmallMasonryGridItem imgSrc={imageSources[9]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <SmallMasonryGridItem imgSrc={imageSources[10]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <BigMasonryGridItem imgSrc={imageSources[11]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <BigMasonryGridItem imgSrc={imageSources[12]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <SmallMasonryGridItem imgSrc={imageSources[13]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <SmallMasonryGridItem imgSrc={imageSources[14]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
          <SmallMasonryGridItem imgSrc={imageSources[15]} title={"Test"} description={"Test description"} priceRange={"36.75 - 42.15  IVA"} />
        </div>
      </div>
    );
  };

export default MasonryGrid;
