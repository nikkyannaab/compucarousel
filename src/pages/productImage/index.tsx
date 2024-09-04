import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useProducts } from "./service-hooks/useProducts";
import { Product } from "./interface/types";
import "./index.css";

const ProductCarousel: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !products) {
    return <div>Error loading products.</div>;
  }

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {products.map((product: Product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="carousel-image"
          />
          <p className="legend">{product.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
