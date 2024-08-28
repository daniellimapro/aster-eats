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
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const Product = ({ item }) => {
  const getRandomValue = () => {
    const min = 50;
    const max = 90;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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
              R$ {getRandomValue()},00
            </Text>
          </Stack>
          <Button
            size="lg"
            bg="#ffc700"
            _text={{ color: "#875304", fontWeight: "bold" }}
            onPress={() => console.log("hello world")}
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
