import BackgroundAsImageWithCenteredContent from '../components/hero/BackgroundAsImageWithCenteredContent.tsx'
import ProductList from '../components/productList/ProductList.tsx'

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
        <BackgroundAsImageWithCenteredContent backgroundImages={backgroundImages}/>
        <ProductList/>
    </>
  )
}

export default HomePage