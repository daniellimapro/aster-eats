import { View, Heading, Text } from "native-base";
import { CartList } from "@/components/CartList/CartList";
import { useCart } from "@/context/CartContext";
import { colors } from "@/styles/colors";

export default function Cart() {
  const { products, totalAmount } = useCart();
  return (
    <View w="100%" padding={5} bg={colors.white}>
      <Heading color={colors.brown} mb={5}>
        Minhas Compras{" "}
        <Text color={colors.blackTransparent} fontSize={16}>
          R$ {totalAmount}
        </Text>
      </Heading>
      {products.length > 0 ? (
        <CartList />
      ) : (
        <View h="100%" pt={10}>
          <Text
            color={colors.blackTransparent}
            fontSize={100}
            fontWeight="bold"
            textAlign="center"
          >
            😢
          </Text>
          <Text
            color={colors.blackTransparent}
            fontSize={20}
            fontWeight="bold"
            textAlign="center"
          >
            Seu carrinho de compras está vazio.
          </Text>
        </View>
      )}
    </View>
  );
}
