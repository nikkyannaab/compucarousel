import  { ReactElement } from "react";
import ContextWinners from "../card";

interface Slide {
  component: ReactElement;
  time: number;
}

const useContextWinnerSlides = (time: number): Slide[] => {
  const slides = [
    {
      component: <ContextWinners key="context-winner-one" />,
      time,
    },
    
  ];

  return slides;
};

export default useContextWinnerSlides;
