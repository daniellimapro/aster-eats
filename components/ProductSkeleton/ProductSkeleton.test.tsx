import React from "react";
import { render, screen } from "@testing-library/react-native";
import { ProductSkeleton } from "./ProductSkeleton";
import { NativeBaseProvider } from "native-base";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const setup = () => {
  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <ProductSkeleton />
    </NativeBaseProvider>
  );
};

describe("ProductSkeleton", () => {
  it("renders the skeleton container", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-skeleton-container")).toBeTruthy();
  });
});
