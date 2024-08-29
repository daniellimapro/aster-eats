import { View, Heading, Text } from "native-base";
import { CartList } from "@/components/CartList";
import { useCart } from "@/context/CartContext";

export default function TabTwoScreen() {
  const { dishes } = useCart();
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color="#875304" mb={5}>
        Minhas Compras{" "}
        <Text color="rgba(0,0,0,.3)" fontSize={16}>
          {dishes.length} {dishes.length === 1 ? "item" : "itens"}
        </Text>
      </Heading>

      <CartList />
    </View>
  );
}
