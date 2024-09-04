import { useLocation } from "react-router-dom";

const useCalculatedTime = (paramName: string, defaultTime: number): number => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the parameter value from the URL, or use the default time if not provided
  const timeInSeconds = parseInt(queryParams.get(paramName) || `${defaultTime}`, 10);

  // Convert the time to milliseconds
  const timeInMilliseconds = timeInSeconds * 1000;

  return timeInMilliseconds;
};

export default useCalculatedTime;
