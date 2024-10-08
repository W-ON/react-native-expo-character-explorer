import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { store } from "./src/store/store";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { ThemeProvider } from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Character from "./src/screens/Character";
import { navigationTheme, theme } from "./src/theme";
import { RootStackParamList } from "./src/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": OpenSans_400Regular,
    "OpenSans-Bold": OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded) {
    return null; //
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.background} />
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTintColor: theme.colors.primary,
              headerTitleStyle: {
                fontFamily: theme.fonts.bold,
                color: theme.colors.primary,
              },
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Characters List" }}
            />
            <Stack.Screen
              name="Character"
              component={Character}
              options={{ title: "Character Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
