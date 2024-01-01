import { useState } from "react";

const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};

const data = {
  heading: "Checkout our products",
  tabs: {
    StanleyStella: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Jalapeno Poppers",
        content: "Crispy Soyabeans",
        price: "$8.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Cajun Chicken",
        content: "Roasted Chicken & Egg",
        price: "$7.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chillie Cake",
        content: "Deepfried Chicken",
        price: "$2.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Guacamole Mex",
        content: "Mexican Chilli",
        price: "$3.99",


        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
        price: "$3.99",


        url: "#"
      }
    ],
    Marca: getRandomCards(),
    OtraMarca: getRandomCards(),
    OtraOtraMarca: getRandomCards()
  }
}


const ProductList = () => {
  const tabsKeys = Object.keys(data.tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center">
            Checkout Our Products
          </h2>
          <div className="flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0">
            {Object.keys(data.tabs).map((tabName, index) => (
              <div
                key={index}
                className={`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:bg-gray-300 hover:text-gray-700 ${
                  activeTab === tabName ? 'bg-primary-500 text-gray-100' : ''
                }`}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </div>
            ))}
          </div>
        </div>

        {tabsKeys.map((tabKey, index) => (
          <div
            key={index}
            className={`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12 ${
              activeTab === tabKey ? 'opacity-100 scale-100' : 'opacity-0 scale-75 hidden'
            } transition-opacity duration-400`}
          >
            {data.tabs[tabKey].map((card, cardIndex) => (
              <div className="mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12" key={cardIndex}>
                <div className="group relative bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 overflow-hidden">
                  <div
                    style={{ backgroundImage: `url(${card.imageSrc})` }}
                    className="h-56 xl:h-64 bg-center bg-cover rounded-t"
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={card.url} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Buy Now</a>
                    </div>
                  </div>
                  <div className="p-4 text-gray-900">
                    <h5 className="text-lg font-semibold">{card.title}</h5>
                    <p className="mt-1 text-sm font-medium text-gray-600">{card.content}</p>
                    <p className="mt-4 text-xl font-bold">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;