import { View, Heading } from "native-base";
import { ProductList } from "@/components/ProductList";

export default function TabOneScreen() {
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color="#875304" mb={5}>
        Faça sua escolha
      </Heading>
      <ProductList />
    </View>
  );
}
