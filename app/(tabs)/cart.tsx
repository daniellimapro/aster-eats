import { ScrollView, Heading, Divider } from "native-base";
import { CartList } from "@/components/CartList";

export default function TabTwoScreen() {
  return (
    <ScrollView w="100%" padding={5} bg="white">
      <Heading color="#875304">Minhas Compras</Heading>
      <Divider
        my="4"
        mb="6"
        _light={{
          bg: "muted.100",
        }}
      />
      <CartList />
    </ScrollView>
  );
}
