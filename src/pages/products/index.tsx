import React, { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useCalculatedTime from "../../util/customHooks/useCalculatedTime";
import { DEFAULT_VALUES } from "../../util/config/config";
import useCalculateCount from "../../util/customHooks/useCalculateCount";
import { useProducts } from "./service-hooks/useProducts";
import ProductCard from "./productCard";

const ProductCarousel: React.FC = () => {
  const productTime = useCalculatedTime(
    DEFAULT_VALUES.PRODUCT_SLIDES_FREQUENCY,
    DEFAULT_VALUES.DEFAULT_TIMER
  );
  const productCount = useCalculateCount(DEFAULT_VALUES.PRODUCT_COUNT);
  const { data: products } = useProducts(productCount);

  // Memoize the product list
  const memoizedProducts = useMemo(() => products, [products]);

  if (!memoizedProducts || memoizedProducts.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={productTime}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      selectedItem={0} 
    >
      {memoizedProducts.map((prodData) => (
        <ProductCard productData={prodData} key={prodData.productId} />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
