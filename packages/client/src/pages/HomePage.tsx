import Header from "../components/header/Header";
import BackgroundAsImageWithCenteredContent from "../components/hero/BackgroundAsImageWithCenteredContent";
import MasonryGrid from "../components/masonryGrid/MasonryGrid";
import ProductByFilterGrid from "../components/productByFilterGrid/ProductByFilterGrid";

const backgroundImages: {classname: string, upperText: string, lowerText: string, href: string}[] = [
  {
    classname: "bg-center bg-cover bg-no-repeat lg:bg-hero-pattern1 bg-hero-pattern-mobile1 sm:hero-pattern-mobile1",
    upperText: "Book Music & Comedy Events",
    lowerText: "anywhere in New York",
    href: "/stanleystella"
  },
  {
    classname: "bg-top bg-cover bg-no-repeat lg:bg-hero-pattern2 bg-hero-pattern-mobile2 sm:hero-pattern-mobile2",
    upperText: "Book Music & Comedy Events",
    lowerText: "anywhere in New York",
    href: "/otramarca"
  },
];

const HomePage = () => {
  return (
    <>
      <Header pages={null} />
      <BackgroundAsImageWithCenteredContent backgroundImages={backgroundImages} />
      <section className="mt-32">
        <MasonryGrid />
      </section>
      <section className="mt-32">
        <ProductByFilterGrid />
      </section>

    </>
  )
}

export default HomePage