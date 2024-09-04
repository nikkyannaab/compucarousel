import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../interface/types'

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return data;
};

export const useProducts = () => {
    return useQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
    });
  };
