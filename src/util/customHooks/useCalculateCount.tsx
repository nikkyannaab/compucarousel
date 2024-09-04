import { useLocation } from "react-router-dom";

const useCalculateCount = (paramName: string): number => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const count = Number(queryParams.get(paramName) || 2);
  return count;
};

export default useCalculateCount;
