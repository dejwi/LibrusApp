import { TailwindProvider } from "tailwindcss-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import "tailwindcss-react-native/types.d";

import Home from "./screens/Home";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <TailwindProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name='Timetable' component={}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
