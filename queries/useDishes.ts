import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
}

interface DishesResponse {
  dishes: Dish[];
}

export const axiosInstance = axios.create({
  baseURL:
    "https://api.mockfly.dev/mocks/b3cd93ab-666e-4e2b-b317-27cf1f91da3d/dishes",
});

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const useDishes = () => {
  return useQuery<DishesResponse>({
    queryKey: ["dishes"],
    queryFn: async (): Promise<DishesResponse> => {
      await delay(5000); // Simula um atraso de 5 segundos
      const response: AxiosResponse<DishesResponse> = await axiosInstance.get(
        ""
      );
      return response.data;
    },
  });
};
