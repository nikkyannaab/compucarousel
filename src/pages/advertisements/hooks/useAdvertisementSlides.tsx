import { ReactElement } from "react";
import AdvertisementOne from "../advertisementone/index";
import AdvertisementTwo from "../adverstisementtwo/index";

interface Slide {
  component: ReactElement;
  time: number;
}

const useAdvertisementSlides = (time: number): Slide[] => {
  const slides = [
    {
      component: <AdvertisementOne key="advertisement-one" />,
      time,
    },
    {
      component: <AdvertisementTwo key="advertisement-two" />,
      time,
    },
  ];

  return slides;
};

export default useAdvertisementSlides;
