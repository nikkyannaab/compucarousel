import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import useAdvertisementSlides from "./hooks/useAdvertisementSlides";
import { DEFAULT_VALUES } from "../../util/config/config";

const AdvertisementCarousel: React.FC = () => {
  const advertisementTime = useCalculatedTime(DEFAULT_VALUES.ADVERTISEMENT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);

  const advertisementSlides = useAdvertisementSlides(advertisementTime);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={advertisementTime} 
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {advertisementSlides.map((slide, index) => (
        <div key={index}>{slide.component}</div>
      ))}
    </Carousel>
  );
};

export default AdvertisementCarousel;
