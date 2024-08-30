import React from "react";
import { render } from "@testing-library/react-native";
import { Product } from "./Product";
import { useCart } from "@/context/CartContext";
import { NativeBaseProvider } from "native-base";

jest.mock("@/context/CartContext", () => ({
  useCart: jest.fn(),
}));

const mockItem = {
  id: 1,
  name: "Produto Teste",
  price: 99.99,
  image: "https://example.com/image.png",
  amount: 2,
};
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const setup = () => {
  const mockAddProductToCart = jest.fn();

  (useCart as jest.Mock).mockReturnValue({
    addProductToCart: mockAddProductToCart,
  });

  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Product item={mockItem} />
    </NativeBaseProvider>
  );
};

describe("Product", () => {
  it("renders the product name, price, and image correctly", () => {
    const { getByText, getByTestId } = setup();

    expect(getByText("Produto Teste")).toBeTruthy();
    expect(getByText("R$ 99.99")).toBeTruthy();
    const image = getByTestId("product-image");
    expect(image).toBeTruthy();
  });
});
