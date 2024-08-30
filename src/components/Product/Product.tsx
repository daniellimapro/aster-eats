import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Button,
} from "native-base";
import { useCart } from "@/context/CartContext";
import { ProductProps } from "@/interfaces/Product";
import { colors } from "@/styles/colors";

interface ProductItem {
  item: ProductProps;
}

export const Product = ({ item }: ProductItem) => {
  const { addProductToCart } = useCart();

  return (
    <Box alignItems="center">
      <Box
        maxW="100%"
        flex="1"
        rounded="lg"
        shadow="lg"
        marginBottom={10}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
      >
        <Box>
          <AspectRatio w="100%" ratio={21 / 7}>
            <Image
              source={{ uri: item.image }}
              alt="Product Image"
              testID="product-image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1" testID="product-name">
              {item.name}
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="800"
              ml="-0.5"
              mt="-1"
              color={colors.brown}
              testID="product-price"
            >
              R$ {item.price}
            </Text>
          </Stack>
          <Button
            size="lg"
            bg="#ffc700"
            _text={{ color: colors.brown, fontWeight: "bold" }}
            _pressed={{ background: colors.lightGray }}
            onPress={() => addProductToCart(item)}
            isLoading={false}
            isLoadingText="Adicionando"
            testID="add-to-cart-button"
          >
            Adicionar ao Carrinho
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
