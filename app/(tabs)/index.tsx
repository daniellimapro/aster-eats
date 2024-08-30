import { View, Heading } from "native-base";
import { ProductList } from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color="#875304" mb={5}>
        Faça sua escolha
      </Heading>
      <ProductList />
    </View>
  );
}
