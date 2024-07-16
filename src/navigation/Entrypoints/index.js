import * as React from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import LoaderEffect from "../../navigation/Home/BottomTabs"

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ["https://heartitout.in/"],
        config: {
          screens: {
            loader: ":navigation",
          },
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "#FFF",
          },
          headerShown: false,
        }}
        initialRouteName={"loader"}
      >
        <Stack.Screen name="loader" component={LoaderEffect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
