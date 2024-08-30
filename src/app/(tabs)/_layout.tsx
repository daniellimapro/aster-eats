import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { colors } from "@/styles/colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.yellow,
          paddingTop: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="home"
              color={focused ? colors.brown : colors.brownTransparent}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="shopping-cart"
              color={focused ? colors.brown : colors.brownTransparent}
            />
          ),
        }}
      />
    </Tabs>
  );
}
