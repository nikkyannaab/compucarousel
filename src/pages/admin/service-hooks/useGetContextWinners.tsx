import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const headers = {
  hash: "D13E796F07B2652206DA6F04E74A23BD043C6F97EF1C45537831FE53C9F48924",
  softwareType: "2",
  time: "1667349155588",
};

const fetchWinnerDetails = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await axios.get<any>(
    `https://lrs-api.compusystems.com/exhibitor/winners`,
    { headers }
  );
  return data?.winners;
};

export const useGetContextWinnerDetails = () => {
  return useQuery({
    queryKey: ["winnerDetails"],
    queryFn: () => fetchWinnerDetails(),
  });
};
