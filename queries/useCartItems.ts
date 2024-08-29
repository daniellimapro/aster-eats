import { ProductProps } from "@/interfaces/Product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
interface ProductsResponse {
  products: ProductProps[];
}

export const axiosInstance = axios.create({
  baseURL:
    "https://api.mockfly.dev/mocks/b3cd93ab-666e-4e2b-b317-27cf1f91da3d/products",
});

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const useCartItems = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductsResponse> => {
      await delay(5000);
      const response: AxiosResponse<ProductsResponse> = await axiosInstance.get(
        ""
      );
      return response.data;
    },
  });
};
