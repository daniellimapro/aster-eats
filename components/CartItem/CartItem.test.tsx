import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { CartItem } from "@/components/CartItem/CartItem"; // ajuste o caminho conforme necessário
import { NativeBaseProvider } from "native-base";

describe("CartItem", () => {
  const mockItem = {
    id: 1,
    name: "Test Product",
    price: 100,
    amount: 2,
    image: "https://via.placeholder.com/150",
  };

  const mockRemoveItemFromArray = jest.fn();
  const mockAddAmountToProduct = jest.fn();
  const mockDecreaseAmountOfProduct = jest.fn();

  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  const setup = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <CartItem
          item={mockItem}
          removeItemFromArray={mockRemoveItemFromArray}
          addAmountToProduct={mockAddAmountToProduct}
          decreaseAmountOfProduct={mockDecreaseAmountOfProduct}
        />
      </NativeBaseProvider>
    );
  };

  it("renders the product name, price, amount, and image", () => {
    const { getByText, getByTestId } = setup();

    expect(getByText("Test Product")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
    expect(getByText(/R\$\s*200/)).toBeTruthy();

    const image = getByTestId("product-image");
    expect(image).toBeTruthy();
  });

  it("calls addAmountToProduct when the add button is pressed", () => {
    const { getByTestId } = setup();

    const addButton = getByTestId("add-button");
    fireEvent.press(addButton);

    expect(mockAddAmountToProduct).toHaveBeenCalledWith(1);
  });

  it("calls decreaseAmountOfProduct when the remove button is pressed", () => {
    const { getByTestId } = setup();

    const removeButton = getByTestId("remove-button");
    fireEvent.press(removeButton);

    expect(mockDecreaseAmountOfProduct).toHaveBeenCalledWith(1);
  });

  it("calls removeItemFromArray when the delete button is pressed", () => {
    const { getByTestId } = setup();

    const deleteButton = getByTestId("delete-button");
    fireEvent.press(deleteButton);

    expect(mockRemoveItemFromArray).toHaveBeenCalledWith(mockItem);
  });
});
