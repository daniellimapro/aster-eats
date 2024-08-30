import { View, Heading } from "native-base";
import { ProductList } from "@/components/ProductList/ProductList";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color={colors.brown} mb={5}>
        Faça sua escolha
      </Heading>
      <ProductList />
    </View>
  );
}
