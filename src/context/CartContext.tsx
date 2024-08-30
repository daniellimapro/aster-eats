import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { useToast } from "native-base";
import { Text } from "native-base";
import { ToastAlert } from "@/components/ToastAlert/ToastAlert";
import { ProductProps } from "@/interfaces/Product";

interface CartContextType {
  products: ProductProps[];
  addItemToCart: (item: ProductProps) => void;
  removeItemFromCart: (itemToRemove: ProductProps) => void;
  addProductToCart: (product: ProductProps) => Promise<void>;
  addAmountToProduct: (productId: number) => void;
  decreaseAmountOfProduct: (productId: number) => void;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro do CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const toast = useToast(); // Hook do Toast para mostrar mensagens

  const addItemToCart = useCallback((item: ProductProps) => {
    setProducts((prevItems) => [...prevItems, item]);
  }, []);

  const removeItemFromCart = useCallback((itemToRemove: ProductProps) => {
    setProducts((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  }, []);

  const addAmountToProduct = useCallback((productId: number) => {
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, amount: (item.amount ?? 1) + 1 }
          : item
      )
    );
  }, []);

  const decreaseAmountOfProduct = useCallback((productId: number) => {
    setProducts((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === productId) {
            const newAmount = (item.amount ?? 1) - 1;
            return newAmount <= 0 ? null : { ...item, amount: newAmount };
          }
          return item;
        })
        .filter((item): item is ProductProps => item !== null)
    );
  }, []);

  const addProductToCart = useCallback(
    async (product: ProductProps) => {
      const productWithAmount = { ...product, amount: product.amount ?? 1 };
      const itemExists = products.some(
        (item) => item.id === productWithAmount.id
      );

      if (itemExists) {
        toast.show({
          placement: "top",
          render: () => (
            <ToastAlert
              id={product.id}
              style={{ background: "#C11719" }}
              title={
                <Text fontWeight="900">
                  O item já foi adicionado ao carrinho.
                </Text>
              }
              variant="solid"
            />
          ),
        });
      } else {
        try {
          setProducts((prevItems) => [...prevItems, productWithAmount]);

          toast.show({
            placement: "top",
            render: () => (
              <ToastAlert
                id={product.id}
                title={
                  <Text fontWeight="900">
                    {productWithAmount.name} foi adicionado ao carrinho
                  </Text>
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
                id="error"
                style={{ background: "#C11719" }}
                title={<Text fontWeight="900">Houve um erro inesperado</Text>}
                variant="solid"
              />
            ),
          });
        }
      }
    },
    [products, toast]
  );

  const calculateTotalAmount = useCallback(() => {
    const total = products.reduce(
      (total, product) => total + product.price * (product.amount ?? 1),
      0
    );
    setTotalAmount(total);
  }, [products]);

  useEffect(() => {
    calculateTotalAmount();
  }, [products, calculateTotalAmount]);

  return (
    <CartContext.Provider
      value={{
        products,
        addItemToCart,
        removeItemFromCart,
        addProductToCart,
        addAmountToProduct,
        decreaseAmountOfProduct,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
