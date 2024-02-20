import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { IHeroProps } from "../../interfaces/Hero/IHeroProps";
import Sidebar from "./Sidebar";
import Foreground from "./Foreground";

  const BackgroundAsImageWithCenteredContent = (props: IHeroProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const navigate = useNavigate();

    const { backgroundImages } = props;
  
  
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
    <div id="hero-container" className="relative h-screen min-h-128 overflow-hidden">
      {/* Render background images with fade transitions */}
      {renderBackgroundImages()}

      {/* Sidebar for selecting images */}
      <Sidebar backgroundImages={backgroundImages} currentImageIndex={currentImageIndex} handleSidebarItemClick={handleSidebarItemClick} />

      {/* Foreground content */}
      <Foreground upperText={upperText} lowerText={lowerText} handleButton={handleButton}/>
    </div>
  );
};

export default BackgroundAsImageWithCenteredContent;
