import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  HStack,
  IconButton,
  Icon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const CartItem = ({ item }) => {
  const getRandomValue = () => {
    const min = 50;
    const max = 90;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Box alignItems="center">
      <Box
        maxW="100%"
        w="100%"
        flex="1"
        rounded="lg"
        shadow="lg"
        marginBottom={5}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
      >
        <HStack space={3} p="4" alignItems="center">
          {/* Imagem ao lado */}
          <AspectRatio w="20%" ratio={1}>
            <Image
              source={{
                uri: item.image,
              }}
              alt="image"
              borderRadius="md"
            />
          </AspectRatio>

          {/* Conteúdo à direita da imagem */}
          <Stack flex="1" space={1} justifyContent="center">
            <Heading size="sm">{item.name}</Heading>
            <Text fontSize="xs" fontWeight="800" color="#875304">
              R$ {getRandomValue()},00
            </Text>
          </Stack>

          {/* Botões de ação */}
          <Stack space={2} justifyContent="center">
            <HStack space={2} alignItems="center">
              <IconButton
                icon={
                  <Icon
                    as={MaterialIcons}
                    name="remove"
                    size="sm"
                    color="#875304"
                  />
                }
                borderRadius="full"
                bg="#ffc700"
              />
              <Text fontSize="md" fontWeight="800" color="#875304">
                1
              </Text>
              <IconButton
                icon={
                  <Icon
                    as={MaterialIcons}
                    name="add"
                    size="sm"
                    color="#875304"
                  />
                }
                borderRadius="full"
                bg="#ffc700"
              />
            </HStack>
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="delete"
                  size="sm"
                  color="red.500"
                />
              }
              borderRadius="full"
              bg="red.100"
            />
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};