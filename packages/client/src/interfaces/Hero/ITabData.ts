interface ITabData {
    imageSrc: string;
    title: string;
    content: string;
    price: string;
    rating: string;
    reviews: string;
    url: string;
  }
  
  interface Tabs {
    [key: string]: ITabData[];
  }
  