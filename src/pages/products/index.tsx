
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import useProductSlides from "./hooks/useProductSlides";
import { DEFAULT_VALUES } from "../../util/config/config";
import useCalculateCount from "../../util/customHooks/useCalculateCount";

const ProductCarousel: React.FC = () => {
  const productTime = useCalculatedTime(DEFAULT_VALUES.PRODUCT_SLIDES_FREQUENCY, DEFAULT_VALUES.DEFAULT_TIMER);
  const productCount = useCalculateCount(DEFAULT_VALUES.PRODUCT_COUNT)
  const productsSlides = useProductSlides(productTime,productCount); 


  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={productTime}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {productsSlides.map((slide, index) => (
        <div key={index}>{slide.component}</div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
