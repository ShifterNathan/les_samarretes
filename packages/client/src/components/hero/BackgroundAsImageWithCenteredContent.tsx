import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

  const BackgroundAsImageWithCenteredContent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const navigate = useNavigate();
  
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
  
  
    const startTransition = () => {
      setIsFadingOut(true); // Start fade-out effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsFadingOut(false); // End fade-out effect, start fade-in
      }, 500); // Short delay for fade-out
    };
  
    useEffect(() => {
      intervalRef.current = window.setInterval(startTransition, 7000); // Change image every 7000 milliseconds (7 seconds)
      
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    }, [backgroundImages.length]);

    const handleSidebarItemClick = (index: number) => {
      if (index !== currentImageIndex) {
        // Clear existing interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
    
        setIsFadingOut(true);
    
        // Set new image index and fade back in
        setTimeout(() => {
          setCurrentImageIndex(index);
          setIsFadingOut(false);
    
          // Restart the interval after the manual selection
          // Assert the setInterval return type as number
          intervalRef.current = setInterval(startTransition, 5000) as unknown as number;
        }, 500);
      }
    };
  
  // Function to render background images
  const renderBackgroundImages = () => {
    return backgroundImages.map((bg, index) => {
      const isActive = index === currentImageIndex;
      const isFading = isActive && isFadingOut;
      return (
        <div
          key={bg.classname}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isActive && !isFading ? 'opacity-100' : 'opacity-0'
          } ${bg.classname}`}
        />
      );
    });
  };
  
  const handleButton = () => {
    const imageInUse = backgroundImages[currentImageIndex];
    navigate(imageInUse.href);
  }

  const { upperText, lowerText } = backgroundImages[currentImageIndex];

  return (
    <div id="hero-container" className="relative h-screen min-h-144 overflow-hidden">
      {/* Render background images with fade transitions */}
      {renderBackgroundImages()}

      {/* Sidebar for selecting images */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`text-lg font-bold p-2 ${index === currentImageIndex ? 'text-primary-500' : 'text-gray-500'}`}
            onClick={() => handleSidebarItemClick(index)}
          >
            {index < 9 ? `0${index + 1}` : index + 1}
            {index === currentImageIndex && <div className="w-8 h-1 bg-primary-500 mt-1"></div>}
          </button>
        ))}
      </div>

      {/* Foreground content */}
      <div className="z-20 absolute px-6 sm:px-8 w-full h-full flex justify-start items-center">
        <div className="flex flex-col justify-center items-center mb-20">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-snug">
            <span className="inline-block mt-2 sm:mt-10">
              {upperText}
              <br />
              {lowerText}
            </span>
          </h1>
          <button className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base lg:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hover:bg-primary-600 hover:text-gray-200 focus:outline-none focus:shadow-outline" onClick={handleButton}>
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundAsImageWithCenteredContent;
