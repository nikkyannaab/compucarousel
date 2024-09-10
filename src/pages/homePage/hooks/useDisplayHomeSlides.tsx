import { ReactElement, useEffect } from "react";
import AdvertisementCarousel from "../../advertisements";
import ProductCarousel from "../../products";
import ContextWinnerCarousel from "../../contextWinner";
import { v4 as uuidv4 } from "uuid"; // Import the UUID function
import { useContextWinnerDetails } from "../../contextWinner/service-hooks/useContectWinner";

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
  const { data: winnerDetails ,refetch} = useContextWinnerDetails();

  const slides: Slide[] = [
    {
      component: <AdvertisementCarousel key="advertisement" />,
      time: contextCount * advertisementTime,
    },
  ];

  if (winnerDetails && winnerDetails.length > 0) {
    slides.push({
      component: <ContextWinnerCarousel key="context-winner" />,
      time: contextWinnerTime,
    });
  }

//temp fix by NA
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, productTime ); // 2000 ms = 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [refetch]); // Ensure

  slides.push({
    component: <ProductCarousel key={uuidv4()} />,
    time: adsCount * productTime,
  });

  // Generate a large number of slides to simulate infinity
  const numberOfSlides = 10; // Adjust as needed for smoother experience
  const infiniteSlides = Array.from(
    { length: numberOfSlides },
    (_, i) => slides[i % slides.length]
  );

  return infiniteSlides;
};

export default useDisplayHomeSlides;
