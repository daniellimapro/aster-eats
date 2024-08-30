import { render, fireEvent } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { AppBar } from "./AppBar";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@/context/CartContext";

jest.mock("@/context/CartContext", () => ({
  useCart: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("AppBar", () => {
  it("component successfully renders text on screen", () => {
    (useCart as jest.Mock).mockReturnValue({ products: [] });

    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <AppBar />
      </NativeBaseProvider>
    );

    expect(getByText("ASTER EATS")).toBeTruthy();
  });

  it("navigates to the cart screen when the cart icon is pressed", () => {
    (useCart as jest.Mock).mockReturnValue({ products: [] });

    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <AppBar />
      </NativeBaseProvider>
    );
    const cartIcon = getByTestId("cart-button");
    fireEvent.press(cartIcon);

    expect(mockNavigate).toHaveBeenCalledWith("cart");
  });
});
