import { CartItem } from "./CartItem";
import { FlatList, Text } from "native-base";
import { useCart } from "@/context/CartContext";

export const CartList = () => {
  const { recipes, removeItemFromCart } = useCart();

  return (
    <>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <CartItem removeItemFromArray={removeItemFromCart} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
