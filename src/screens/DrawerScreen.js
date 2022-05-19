import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dun from "./Dun";
import Home from "./Home";
import Huwaari from "./Huwaari";
import Login from "./Login";
import Event from "./Event"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          onPress={() => navigation.navigate("Home")}
          title="Нэвтрэх"
        />
        <Drawer.Screen name="Төлбөр" component={Dun} />
        <Drawer.Screen name="Huwaari" component={Huwaari} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Event" component={Event} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}