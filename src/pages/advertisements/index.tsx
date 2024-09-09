import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import useAdvertisementSlides from "./hooks/useAdvertisementSlides";
import { DEFAULT_VALUES } from "../../util/config/config";

const AdvertisementCarousel: React.FC = () => {
  const advertisementTime = useCalculatedTime(
    DEFAULT_VALUES.ADVERTISEMENT_SLIDES_FREQUENCY,
    DEFAULT_VALUES.DEFAULT_TIMER
  );

  const advertisementSlides = useAdvertisementSlides(advertisementTime);

  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetCarousel, setResetCarousel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (resetCarousel) {
        setCurrentSlide(0);
        setResetCarousel(false);
      } else {
        setCurrentSlide((prevSlide) =>
          prevSlide === advertisementSlides.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, advertisementTime);

    return () => clearInterval(interval);
  }, [advertisementTime, advertisementSlides, resetCarousel]);

  useEffect(() => {
    if (currentSlide === advertisementSlides.length - 1) {
      // Add a short delay and reset the carousel to force starting from the first slide
      setTimeout(() => {
        setResetCarousel(true);
      }, advertisementTime);
    }
  }, [currentSlide, advertisementSlides.length, advertisementTime]);

  return (
    <Carousel
      selectedItem={currentSlide}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false} 
      interval={advertisementTime}
    >
      {advertisementSlides.map((slide, index) => (
        <div key={index}>{slide.component}</div>
      ))}
    </Carousel>
  );
};

export default AdvertisementCarousel;
