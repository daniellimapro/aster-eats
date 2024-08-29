import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  IconButton,
  Icon,
  useToast,
  Alert,
  VStack,
  CloseIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCart } from "@/context/CartContext";

export const Product = ({ item }) => {
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
              source={{
                uri: item.image,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="800"
              ml="-0.5"
              mt="-1"
              color="#875304"
            >
              R$ {item.price}
            </Text>
          </Stack>
          <Button
            size="lg"
            bg="#ffc700"
            _text={{ color: "#875304", fontWeight: "bold" }}
            _pressed={{ background: "#f0f0f0" }}
            onPress={() => addProductToCart(item)}
            isLoading={false}
            isLoadingText="Adicionando"
          >
            Adicionar ao Carrinho
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
