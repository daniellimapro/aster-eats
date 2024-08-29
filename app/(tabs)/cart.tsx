import { View, Heading, Text } from "native-base";
import { CartList } from "@/components/CartList";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { products, totalAmount } = useCart();
  return (
    <View w="100%" padding={5} bg="white">
      <Heading color="#875304" mb={5}>
        Minhas Compras{" "}
        <Text color="rgba(0,0,0,.3)" fontSize={16}>
          {products.length} {products.length === 1 ? "item" : "itens"}
        </Text>
      </Heading>
      {products.length > 0 ? (
        <CartList />
      ) : (
        <View h="100%" pt={10}>
          <Text
            color="rgba(0,0,0,.5)"
            fontSize={100}
            fontWeight="bold"
            textAlign="center"
          >
            😢
          </Text>
          <Text
            color="rgba(0,0,0,.5)"
            fontSize={20}
            fontWeight="bold"
            textAlign="center"
          >
            Seu carrinho de compras está vazio.
          </Text>
        </View>
      )}
      {totalAmount > 0 && (
        <Heading color="#875304" mb={5}>
          Valor Total{" "}
          <Text color="rgba(0,0,0,.3)" fontSize={16}>
            R$ {totalAmount}
          </Text>
        </Heading>
      )}
    </View>
  );
}
