import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Instância do Axios com a URL base
export const axiosInstance = axios.create({
  baseURL:
    "https://api.mockfly.dev/mocks/b3cd93ab-666e-4e2b-b317-27cf1f91da3d/dishes",
});

// Função que simula um atraso de 5 segundos antes de resolver a promessa
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Hook personalizado para buscar pratos com atraso
export const useDishes = () => {
  return useQuery({
    queryKey: ["dishes"],
    queryFn: async () => {
      // Adiciona um atraso de 5 segundos
      await delay(11000);

      // Faz a chamada à API após o atraso
      const { data } = await axiosInstance.get("");
      return data;
    },
  });
};
