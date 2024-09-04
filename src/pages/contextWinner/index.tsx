import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import useContextWinnerSlides from "./hooks/useContextWinnerSlides";
import { DEFAULT_VALUES } from "../../util/config/config";


const ContextWinnerCarousel: React.FC = () => {
  const contextWinnerSlideTime = useCalculatedTime(DEFAULT_VALUES.CONTEXT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);
  const contextWinnerSlides = useContextWinnerSlides(contextWinnerSlideTime);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={contextWinnerSlideTime}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {contextWinnerSlides.map((slide, index) => (
        <div key={index}>{slide.component}</div>
      ))}
    </Carousel>
  );
};

export default ContextWinnerCarousel;
