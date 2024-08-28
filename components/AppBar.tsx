import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function AppBar() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="#ffc700" />
      <HStack
        bg="#ffc700"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon
                size="lg"
                as={MaterialIcons}
                name="blur-on"
                color="#875304"
              />
            }
          />
          <Text color="#875304" fontSize="25" fontWeight="900">
            ASTER EATS
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="shopping-cart"
                size="lg"
                color="#875304"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}
