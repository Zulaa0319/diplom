import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Print from "./Print";
import Home from "./Home";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          onPress={() => navigation.navigate("Home")}
        />
        <Stack.Screen name="Тодорхойлолт" component={Print} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}