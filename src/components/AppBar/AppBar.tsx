import React from "react";
import {
  HStack,
  IconButton,
  Icon,
  Text,
  Box,
  StatusBar,
  Badge,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useCart } from "@/context/CartContext";
import { colors } from "@/styles/colors";

type TabParamList = {
  index: undefined;
  two: undefined;
  cart: undefined;
};

type AppNavigationProp = BottomTabNavigationProp<TabParamList, "index">;

export function AppBar() {
  const { products } = useCart();
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg={colors.yellow} />
      <HStack
        bg={colors.yellow}
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
                color={colors.brown}
              />
            }
          />
          <Text color={colors.brown} fontSize="25" fontWeight="900">
            ASTER EATS
          </Text>
        </HStack>
        <HStack>
          <IconButton
            onPress={() => navigation.navigate("cart")}
            testID="cart-button"
            icon={
              <Icon
                as={MaterialIcons}
                name="shopping-cart"
                size="lg"
                color={colors.brown}
              />
            }
          />
          {products.length > 0 && (
            <Badge bg={colors.red} borderRadius={5} mr={2} h={7}>
              <Text color={colors.yellow} fontWeight="bold">
                {products.length}
              </Text>
            </Badge>
          )}
        </HStack>
      </HStack>
    </>
  );
}
