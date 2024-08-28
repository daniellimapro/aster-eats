import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type TabParamList = {
  index: undefined;
  two: undefined;
  cart: undefined;
};

type AppNavigationProp = BottomTabNavigationProp<TabParamList, "index">;

export function AppBar() {
  const navigation = useNavigation<AppNavigationProp>();

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
            onPress={() => navigation.navigate("cart")}
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
