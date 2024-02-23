import SmallMasonryGridItem from "./SmallMasonryGridItem";
import BigMasonryGridItem from "./BigMasonryGridItem";

const MasonryGrid = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-full grid grid-cols-12 auto-rows-auto gap-4 mx-auto px-4"
        style={{ maxWidth: "1400px" }}
      >
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/1" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/2" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/3" />
        <BigMasonryGridItem imgSrc="https://source.unsplash.com/random/4" />
        <BigMasonryGridItem imgSrc="https://source.unsplash.com/random/5" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/6" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/7" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/8" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/9" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/10" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/11" />
        <BigMasonryGridItem imgSrc="https://source.unsplash.com/random/12" />
        <BigMasonryGridItem imgSrc="https://source.unsplash.com/random/13" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/14" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/15" />
        <SmallMasonryGridItem imgSrc="https://source.unsplash.com/random/16" />
      </div>
    </div>
  );
};

export default MasonryGrid;
