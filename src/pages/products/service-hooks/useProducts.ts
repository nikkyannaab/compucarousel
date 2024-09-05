import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductDescription } from "../interface/types";

const headers = {
  hash: "D13E796F07B2652206DA6F04E74A23BD043C6F97EF1C45537831FE53C9F48924",
  softwareType: "2",
  time: "1667349155588",
};

const fetchProducts = async (
  prodCount: number
): Promise<ProductDescription[]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await axios.get<any>(
    `https://lrs-api.compusystems.com/exhibitor/random-product-list?eventId=143&productCount=${prodCount}`,
    { headers }
  );
  return data?.randomProductList;
};

export const useProducts = (prodCount: number) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(prodCount),
  });
};
