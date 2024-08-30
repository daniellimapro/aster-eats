import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import { AppBar } from "@/components/AppBar/AppBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import { useRootLayout } from "@/hooks/useRootLayout";

LogBox.ignoreAllLogs(true);

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});

export default function RootLayout() {
  const fonts = {
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  };

  const loaded = useRootLayout(fonts);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

function RootLayoutNav() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        <CartProvider>
          <AppBar />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </CartProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
