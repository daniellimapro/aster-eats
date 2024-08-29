import React from "react";
import { FlatList } from "native-base";
import { useCart } from "@/context/CartContext";
import { CartItem } from "./CartItem";

interface CartItemType {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
}

export const CartList = () => {
  const {
    dishes,
    removeItemFromCart,
    addAmountToProduct,
    decreaseAmountOfProduct,
  } = useCart();

  return (
    <FlatList
      data={dishes}
      renderItem={({ item }: { item: CartItemType }) => (
        <CartItem
          addAmountToProduct={addAmountToProduct}
          removeItemFromArray={removeItemFromCart}
          decreaseAmountOfProduct={decreaseAmountOfProduct}
          item={item}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
