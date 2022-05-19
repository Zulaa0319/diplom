import * as React from "react";
import { createStackNavigator } from "@react-navigation/Stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Huwaari from "./src/screens/Huwaari"
import Dun from "./src/screens/Dun"
import { createDrawerNavigator } from "@react-navigation/Drawer";
import Home from "./src/screens/Home";
import Event from "./src/screens/Event";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Huwaari" component={Huwaari} />
      <Drawer.Screen name="Dun" component={Dun} />
      <Drawer.Screen name="Event" component={Event} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Төлбөр" title="Оюутны Хичээлийн Дүн" component={Dun} />
        <Stack.Screen name="Тодорхойлолт" component={Huwaari} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
