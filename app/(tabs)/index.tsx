import { ScrollView, Heading, Divider } from "native-base";
import { ProductList } from "@/components/ProductList";

export default function TabOneScreen() {
  return (
    <ScrollView w="100%" padding={5} bg="white">
      <Heading color="#875304">Produtos</Heading>
      <Divider
        my="6"
        mb="6"
        _light={{
          bg: "muted.100",
        }}
      />
      <ProductList />
    </ScrollView>
  );
}
