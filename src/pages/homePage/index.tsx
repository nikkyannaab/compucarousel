import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import useDisplayHomeSlides from "./hooks/useDisplayHomeSlides";
import useCalculateCount from "../../util/customHooks/useCalculateCount";
import { DEFAULT_VALUES } from "../../util/config/config";


const HomePage: React.FC = () => {
  const productTime = useCalculatedTime(DEFAULT_VALUES.PRODUCT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);
  const advertisementTime = useCalculatedTime(DEFAULT_VALUES.ADVERTISEMENT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);
  const contextWinnerTime = useCalculatedTime(DEFAULT_VALUES.CONTEXT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);

  const adsCount = useCalculateCount(DEFAULT_VALUES.PRODUCT_COUNT);
  const ctxtCount = useCalculateCount(DEFAULT_VALUES.CONTEXT_COUNT);

  const slides = useDisplayHomeSlides(
    productTime,
    advertisementTime,
    contextWinnerTime,
    adsCount,
    ctxtCount
  );


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const duration = slides[currentIndex]?.time;

    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Set the interval based on the time for the current slide
    const id = setInterval(updateIndex, duration);

    // Cleanup on unmount or index change
    return () => clearInterval(id);
  }, [currentIndex, slides]);

  return (
    <Carousel
      autoPlay={false}
      infiniteLoop={true}
      showThumbs={false}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
      interval={slides[currentIndex]?.time}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {slides.map((slide, index) => (
        <div key={index}>{slide.component}</div>
      ))}
    </Carousel>
  );
};

export default HomePage;
