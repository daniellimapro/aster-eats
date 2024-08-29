import React, { createContext, useContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Toast,
  useToast,
  VStack,
} from "native-base";
import { Text } from "native-base";

// Definindo a interface para o item do carrinho
interface CartItem {
  id: string;
  title: string;
}

// Definindo a interface para o contexto do carrinho
interface CartContextType {
  recipes: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemToRemove: CartItem) => void;
  addProductToCart: (product: CartItem) => Promise<void>;
}

const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="95%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : "success"}
      variant={variant}
      {...rest}
      bg="#875304"
      marginTop={90}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === "solid"
                  ? "lightText"
                  : variant !== "outline"
                  ? "darkText"
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        {description && (
          <Text
            px="6"
            color={
              variant === "solid"
                ? "lightText"
                : variant !== "outline"
                ? "darkText"
                : null
            }
          >
            {description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};

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
  const [recipes, setRecipes] = useState<CartItem[]>([]);
  const toast = useToast(); // Hook do Toast para mostrar mensagens

  const addItemToCart = (item: CartItem) => {
    setRecipes((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove: CartItem) => {
    setRecipes((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const addProductToCart = async (product: CartItem) => {
    const itemExists = recipes.some((item) => item.id == product.id);
    console.log(itemExists);
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
        recipes.push(product);
        const updatedJsonValue = JSON.stringify(recipes);
        setRecipes(recipes); // Atualiza o estado com o novo array
        toast.show({
          placement: "top",
          render: () => (
            <ToastAlert
              id={"xyz"}
              style={{ background: "#000000" }}
              title={
                <>
                  <Text fontWeight="900" display="block">
                    {product.name}
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
      value={{ recipes, addItemToCart, removeItemFromCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
