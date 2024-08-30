import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

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
          backgroundColor: "#ffc700",
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
              color={focused ? "#875304" : "rgba(135, 83, 4, 0.5)"}
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
              color={focused ? "#875304" : "rgba(135, 83, 4, 0.5)"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
