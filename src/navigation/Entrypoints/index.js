import * as React from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import LoaderEffect from "../../components/Loader/InitLoaderEffect";
import Heartitout from "../../screens/Utilities/Web/Heartitout";
import RightDrawer from "../Home/BottomTabs";

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
        <Stack.Screen name="webview" component={Heartitout} />
        <Stack.Screen name="main" component={RightDrawer} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
