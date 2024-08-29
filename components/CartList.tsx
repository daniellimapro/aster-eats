import { CartItem } from "./CartItem";
import { FlatList, Text } from "native-base";
import { useCart } from "@/context/CartContext";

export const CartList = () => {
  const {
    recipes,
    removeItemFromCart,
    addAmountToProduct,
    decreaseAmountOfProduct,
  } = useCart();

  return (
    <>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <CartItem
            addAmountToProduct={addAmountToProduct}
            removeItemFromArray={removeItemFromCart}
            decreaseAmountOfProduct={decreaseAmountOfProduct}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
