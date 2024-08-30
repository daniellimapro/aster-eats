import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

type Fonts = {
  [key: string]: any;
};

export const useRootLayout = (fonts: Fonts): boolean => {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      const prepare = async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await SplashScreen.hideAsync();
      };
      prepare();
    }
  }, [loaded]);

  return loaded;
};
