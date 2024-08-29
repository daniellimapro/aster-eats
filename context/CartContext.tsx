import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useToast } from "native-base";
import { Text } from "native-base";
import { ToastAlert } from "@/components/ToastAlert";

interface CartItem {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
}

interface CartContextType {
  dishes: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemToRemove: CartItem) => void;
  addProductToCart: (product: CartItem) => Promise<void>;
  addAmountToProduct: (itemToRemove: number) => void;
  decreaseAmountOfProduct: (itemToRemove: number) => void;
  dishesAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart deve ser usado dentro do CartProvider");
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dishes, setDishes] = useState<CartItem[]>([]);
  const [dishesAmount, setDishesAmount] = useState(0);
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
    setDishes((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id == productId) {
          return {
            ...item,
            amount: (item.amount ?? 1) + 1,
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
            const newAmount = (item.amount ?? 1) - 1;
            if (newAmount <= 0) {
              return null;
            }
            return {
              ...item,
              amount: newAmount,
            };
          }
          return item;
        })
        .filter((item) => item !== null);
      return updatedItems;
    });
  };

  const addProductToCart = async (product: CartItem) => {
    const productWithAmount = { ...product, amount: product.amount ?? 1 };
    const itemExists = dishes.some((item) => item.id === productWithAmount.id);

    if (itemExists) {
      toast.show({
        placement: "top",
        render: () => (
          <ToastAlert
            id={product.id}
            style={{ background: "#C11719" }}
            title={
              <>
                <Text fontWeight="900" display="block">
                  O item já foi adicionado ao carrinho.
                </Text>
              </>
            }
            variant="solid"
          />
        ),
      });
    } else {
      try {
        const updatedDishes = [...dishes, productWithAmount];
        setDishes(updatedDishes);

        toast.show({
          placement: "top",
          render: () => (
            <ToastAlert
              id={product.id}
              title={
                <>
                  <Text fontWeight="900" display="block">
                    {productWithAmount.name}
                  </Text>{" "}
                  foi adicionado ao carrinho
                </>
              }
              variant="solid"
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
            />
          ),
        });
      }
    }
  };

  const calculateTotalAmount = () => {
    const dishesAmount = dishes.reduce(
      (total, dish) => total + dish.price * dish.amount,
      0
    );
    setDishesAmount(dishesAmount);
  };

  useEffect(() => {
    dishes.length > 0 && calculateTotalAmount();
  }, [dishes]);

  return (
    <CartContext.Provider
      value={{
        dishes,
        addItemToCart,
        removeItemFromCart,
        addProductToCart,
        addAmountToProduct,
        decreaseAmountOfProduct,
        dishesAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
