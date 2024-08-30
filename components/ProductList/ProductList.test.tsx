import React from "react";
import { render, screen } from "@testing-library/react-native";
import { ProductList } from "./ProductList";
import { useCartItems } from "@/queries/useCartItems";
import { NativeBaseProvider } from "native-base";

jest.mock("@/queries/useCartItems", () => ({
  useCartItems: jest.fn(),
}));

jest.mock("../Product/Product", () => ({
  Product: ({ item }: any) => <div>{item.name}</div>,
}));

jest.mock("../ProductSkeleton/ProductSkeleton", () => ({
  ProductSkeleton: () => <div>Skeleton</div>,
}));

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const setup = (overrides = {}) => {
  const mockUseCartItems = {
    data: {
      products: [{ id: 1, name: "Produto 1", price: 10, image: "url1" }],
    },
    isLoading: false,
    isPending: false,
    ...overrides,
  };

  (useCartItems as jest.Mock).mockReturnValue(mockUseCartItems);

  render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <ProductList />
    </NativeBaseProvider>
  );

  return { mockUseCartItems };
};

describe("ProductList", () => {
  it("renders empty state when no products are available", () => {
    setup({ data: { products: [] } });

    expect(screen.queryByText("Produto 1")).toBeNull();
  });
});
