import { TailwindProvider } from "tailwindcss-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationState,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import "tailwindcss-react-native/types.d";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import Home from "./screens/Home";
import Timetable from "./screens/Timetable";
import Login from "./screens/Login";
import Loading from "./screens/Loading";
import Nav from "./components/Nav";
import Grades from "./screens/Grades";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [loaded] = useFonts({
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
  });
  const printState = (state: NavigationState | undefined) => {
    if (!state) return;
    const rname = state.routes[state.index].name;
    if (rname === "Login" || rname === "Loading") setShowNav(false);
    else setShowNav(true);
  };

  if (!loaded) return null;
  return (
    <TailwindProvider>
      <NavigationContainer theme={theme} onStateChange={printState}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
          initialRouteName="Loading"
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen
            name="Timetable"
            component={Timetable}
            options={{ gestureDirection: "horizontal-inverted" }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Grades" component={Grades} />
        </Stack.Navigator>
        <Nav show={showNav} />
      </NavigationContainer>
    </TailwindProvider>
  );
}
