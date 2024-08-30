import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { CartList } from "./CartList";
import { useCart } from "@/context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { NativeBaseProvider } from "native-base";

// Mock do useCart
jest.mock("@/context/CartContext", () => ({
  useCart: jest.fn(),
}));

// Mock do CartItem
jest.mock("../CartItem/CartItem", () => ({
  CartItem: jest.fn(() => <></>),
}));

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("CartList", () => {
  const mockAddAmountToProduct = jest.fn();
  const mockRemoveItemFromCart = jest.fn();
  const mockDecreaseAmountOfProduct = jest.fn();

  beforeEach(() => {
    // Configuração dos mocks
    (useCart as jest.Mock).mockReturnValue({
      products: [
        {
          id: 1,
          name: "Produto 1",
          price: 100,
          amount: 2,
          image: "image1.png",
        },
        {
          id: 2,
          name: "Produto 2",
          price: 150,
          amount: 1,
          image: "image2.png",
        },
      ],
      addAmountToProduct: mockAddAmountToProduct,
      removeItemFromCart: mockRemoveItemFromCart,
      decreaseAmountOfProduct: mockDecreaseAmountOfProduct,
    });
  });

  it("renders CartItem components with correct props", () => {
    render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <CartList />
      </NativeBaseProvider>
    );

    expect(CartItem).toHaveBeenCalledTimes(2);
    expect(CartItem).toHaveBeenCalledWith(
      expect.objectContaining({
        item: {
          id: 1,
          name: "Produto 1",
          price: 100,
          amount: 2,
          image: "image1.png",
        },
      }),
      {}
    );

    expect(CartItem).toHaveBeenCalledWith(
      expect.objectContaining({
        item: {
          id: 2,
          name: "Produto 2",
          price: 150,
          amount: 1,
          image: "image2.png",
        },
      }),
      {}
    );
  });
});
