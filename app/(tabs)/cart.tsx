import { View, Heading } from "native-base";
import { CartList } from "@/components/CartList";

export default function TabTwoScreen() {
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color="#875304" mb={5}>
        Minhas Compras
      </Heading>
      <CartList />
    </View>
  );
}
