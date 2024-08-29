import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "native-base";
import { Text } from "native-base";
import { ToastAlert } from "@/components/ToastAlert";

// Definindo a interface para o item do carrinho
interface CartItem {
  id: string;
  title: string;
}

// Definindo a interface para o contexto do carrinho
interface CartContextType {
  dishes: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemToRemove: CartItem) => void;
  addProductToCart: (product: CartItem) => Promise<void>;
  addAmountToProduct: (itemToRemove: CartItem) => void;
  decreaseAmountOfProduct: (itemToRemove: CartItem) => void;
}

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook customizado para usar o contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

// Provedor do contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dishes, setDishes] = useState<CartItem[]>([]);
  const toast = useToast(); // Hook do Toast para mostrar mensagens

  const addItemToCart = (item: CartItem) => {
    setDishes((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove: CartItem) => {
    setDishes((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const addAmountToProduct = (productId: number) => {
    console.log();
    setDishes((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id == productId) {
          return {
            ...item,
            amount: (item.amount ?? 1) + 1, // Adiciona a quantidade especificada
          };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const decreaseAmountOfProduct = (productId: number) => {
    setDishes((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item.id === productId) {
            const newAmount = (item.amount ?? 1) - 1; // Diminui a quantidade especificada
            if (newAmount <= 0) {
              // Remove o item se a quantidade for zero ou menor
              return null;
            }
            return {
              ...item,
              amount: newAmount,
            };
          }
          return item;
        })
        .filter((item) => item !== null); // Remove os itens nulos da lista
      return updatedItems;
    });
  };

  const addProductToCart = async (product: CartItem) => {
    // Adiciona o campo `amount` com valor padrão `1`
    const productWithAmount = { ...product, amount: product.amount ?? 1 };

    const itemExists = dishes.some((item) => item.id === productWithAmount.id);

    if (itemExists) {
      toast.show({
        placement: "top",
        render: () => (
          <ToastAlert
            id={"xyz"}
            style={{ background: "#C11719" }}
            title={
              <>
                <Text fontWeight="900" display="block">
                  O item já foi adicionado ao carrinho.
                </Text>
              </>
            }
            variant="solid"
            isClosable={true}
          />
        ),
      });
    } else {
      try {
        // Cria uma nova cópia do array dishes com o novo produto
        const updatedDishes = [...dishes, productWithAmount];
        const updatedJsonValue = JSON.stringify(updatedDishes);

        // Atualiza o estado com a nova lista de produtos
        setDishes(updatedDishes);

        toast.show({
          placement: "top",
          render: () => (
            <ToastAlert
              id={"xyz"}
              style={{ background: "#000000" }}
              title={
                <>
                  <Text fontWeight="900" display="block">
                    {productWithAmount.name}
                  </Text>{" "}
                  foi adicionado ao carrinho
                </>
              }
              variant="solid"
              isClosable={true}
            />
          ),
        });
      } catch (e) {
        toast.show({
          placement: "top",
          render: () => (
            <ToastAlert
              id={"xyz"}
              style={{ background: "#C11719" }}
              title={
                <>
                  <Text fontWeight="900" display="block">
                    Houve um erro inesperado
                  </Text>
                </>
              }
              variant="solid"
              isClosable={true}
            />
          ),
        });
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        dishes,
        addItemToCart,
        removeItemFromCart,
        addProductToCart,
        addAmountToProduct,
        decreaseAmountOfProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
