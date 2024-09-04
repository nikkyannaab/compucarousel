import  {
  ReactElement,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import ProductOne from "../productOne";
import ProductTwo from "../productTwo";

interface Slide {
  component: ReactElement;
  time: number;
}

const useProductSlides = (time: number, slidesCount: number): Slide[] => {
  const allSlides: ReactElement[] = useMemo(
    () => [<ProductOne key="product-one" />, <ProductTwo key="product-two" />],
    []
  );

  const currentIndexRef = useRef(0);
  const [slidesToReturn, setSlidesToReturn] = useState<Slide[]>([]);
  const [currentIndexRefArray, setCurrentIndexRefArray] = useState<number[]>(
    []
  );

  useEffect(() => {
    const updateSlides = () => {
      const currentIndex = currentIndexRef.current;
      const newSlides = Array(slidesCount)
        .fill(null)
        .map((_, i) => ({
          component: allSlides[(currentIndex + i) % allSlides.length],
          time,
        }));

      setSlidesToReturn(newSlides);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setCurrentIndexRefArray((prevArray: any) => [
        ...prevArray,
        (currentIndex + slidesCount) % allSlides.length,
      ]);
      currentIndexRefArray.push(currentIndex);
      currentIndexRef.current = (currentIndex + 1) % allSlides.length;
    };

    // Set interval to update slides after the specified time
    const intervalId = setInterval(updateSlides, time);

    // Initial call to set the first slide
    updateSlides();

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [time, allSlides]);

  return slidesToReturn;
};

export default useProductSlides;
