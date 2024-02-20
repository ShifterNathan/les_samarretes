import Header from "../components/header/Header";
import TopBar from "../components/header/TopBar";
import BackgroundAsImageWithCenteredContent from "../components/hero/BackgroundAsImageWithCenteredContent";

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
      <TopBar pages={null} />
      <Header />
      <BackgroundAsImageWithCenteredContent backgroundImages={backgroundImages} />
    </>
  )
}

export default HomePage