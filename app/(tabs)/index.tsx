import { ScrollView, Heading, Divider } from "native-base";
import { ProductList } from "@/components/ProductList";

export default function TabOneScreen() {
  return (
    <ScrollView w="100%" padding={5} bg="white">
      <Heading color="#875304">Cardápio</Heading>
      <Divider
        my="4"
        mb="6"
        _light={{
          bg: "muted.100",
        }}
      />
      <ProductList />
    </ScrollView>
  );
}
