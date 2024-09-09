import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const headers = {
  hash: "D13E796F07B2652206DA6F04E74A23BD043C6F97EF1C45537831FE53C9F48924",
  softwareType: "2",
  time: "1667349155588",
  "Content-Type": "application/json",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateWinnerDetails = async (formattedData: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await axios.post<any>(
    `https://lrs-api.compusystems.com/exhibitor/update-winner`,
    formattedData,
    { headers }
  );
  return data;
};

export const useUpdateWinnerDetails = () => {
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (formattedData: any) => updateWinnerDetails(formattedData),
  });
};
