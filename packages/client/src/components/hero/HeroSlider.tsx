import React from 'react';
import Slider from 'react-slick';

// Sample images, replace with your own
const slides = [
  {id: 1, title: "Slide 1", description: "Description for Slide 1", imageUrl: "bg-center bg-cover bg-no-repeat lg:bg-hero-pattern1 bg-hero-pattern-mobile1 sm:hero-pattern-mobile1"},
  {id: 2, title: "Slide 2", description: "Description for Slide 2", imageUrl: "bg-top bg-cover bg-no-repeat lg:bg-hero-pattern2 bg-hero-pattern-mobile2 sm:hero-pattern-mobile2"},
];

const HeroSlider = () => {

  return (
    <div style={{ maxWidth: '100vw' }}>
      <Slider>
        {slides.map((slide) => (
          <div key={slide.id} className={slide.imageUrl + " h-172 flex items-center justify-center"}>
            <div className="text-white text-center backdrop-filter">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
