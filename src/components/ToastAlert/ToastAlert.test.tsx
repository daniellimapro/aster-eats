import React from "react";
import { render, act } from "@testing-library/react-native";
import { useToast } from "native-base";
import { CartProvider, useCart } from "../../context/CartContext";
import { ProductProps } from "@/interfaces/Product";

jest.mock("native-base", () => ({
  useToast: jest.fn(() => ({
    show: jest.fn(),
  })),
  Badge: ({ children }: any) => <>{children}</>,
  Text: ({ children }: any) => <>{children}</>,
}));

jest.mock("@/components/ToastAlert/ToastAlert", () => ({
  ToastAlert: ({ title }: any) => <>{title}</>,
}));

const setup = () => {
  const result = {} as ReturnType<typeof useCart>;

  const TestComponent = () => {
    Object.assign(result, useCart());
    return null;
  };

  render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  );

  return result;
};

describe("CartProvider", () => {
  it("should add a product to the cart", () => {
    const cart = setup();
    const product: ProductProps = {
      id: 1,
      name: "Produto Teste",
      price: 100,
      amount: 1,
      image: "https://example.com/image.jpg",
    };

    act(() => {
      cart.addItemToCart(product);
    });

    expect(cart.products).toContainEqual(product);
  });

  it("should remove a product from the cart", () => {
    const cart = setup();
    const product: ProductProps = {
      id: 1,
      name: "Produto Teste",
      price: 100,
      amount: 1,
      image: "https://example.com/image.jpg",
    };

    act(() => {
      cart.addItemToCart(product);
    });

    act(() => {
      cart.removeItemFromCart(product);
    });

    expect(cart.products).not.toContainEqual(product);
  });

  it("should display a toast when adding a duplicate product", () => {
    const toastMock = jest.fn();
    (useToast as jest.Mock).mockReturnValue({ show: toastMock });

    const cart = setup();
    const product: ProductProps = {
      id: 1,
      name: "Produto Teste",
      price: 100,
      amount: 1,
      image: "https://example.com/image.jpg",
    };

    act(() => {
      cart.addItemToCart(product);
    });

    act(() => {
      cart.addProductToCart(product);
    });

    expect(toastMock).toHaveBeenCalledWith({
      placement: "top",
      render: expect.any(Function),
    });
  });
});
