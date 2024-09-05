import { ReactElement } from "react";
import AdvertisementCarousel from "../../advertisements";
import ProductCarousel from "../../products";
import ContextWinnerCarousel from "../../contextWinner";
import { v4 as uuidv4 } from "uuid"; // Import the UUID function

interface Slide {
  component: ReactElement;
  time: number;
}

const useDisplayHomeSlides = (
  productTime: number,
  advertisementTime: number,
  contextWinnerTime: number,
  adsCount: number,
  contextCount: number
): Slide[] => {

  const slides = [
    {
      component: <AdvertisementCarousel key="advertisement" />,
      time: contextCount * advertisementTime,
    },
    {
      component: <ContextWinnerCarousel key="context-winner" />,
      time: contextWinnerTime,
    },
    {
      component: <ProductCarousel key={uuidv4()} />,
      time: adsCount * productTime,
    },
  ];

  return slides;
};

export default useDisplayHomeSlides;
