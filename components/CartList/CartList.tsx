import React from "react";
import { FlatList } from "native-base";
import { useCart } from "@/context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { ProductProps } from "@/interfaces/Product";

export const CartList = () => {
  const {
    products,
    removeItemFromCart,
    addAmountToProduct,
    decreaseAmountOfProduct,
  } = useCart();

  return (
    <FlatList
      data={products}
      renderItem={({ item }: { item: ProductProps }) => (
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
