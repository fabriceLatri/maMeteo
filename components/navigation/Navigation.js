import React from "react";
import { useColorScheme } from "react-native";
import About from "../About";
import Search from "../Search";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "../DetailsScreen";

const SearchStackNavigator = createStackNavigator();
const AboutStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyDarkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    background: "#010101",
    card: "#010101",
    text: "tomato",
    border: "tomato",
  },
};

const MyLightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    background: "#E2E6E1",
    text: "#545658",
  },
};

const stackGroupScreenOptions = {
  light: {
    headerStyle: {
      backgroundColor: "tomato",
    },
    headerTintColor: "#FFF",
    headerTitleAlign: "center",
    ...TransitionPresets.SlideFromRightIOS,
  },
  dark: {
    headerTintColor: "tomato",
    headerTitleAlign: "center",
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const SearchStackScreen = () => {
  const scheme = useColorScheme();
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Group
        screenOptions={
          scheme === "dark"
            ? stackGroupScreenOptions.dark
            : stackGroupScreenOptions.light
        }
      >
        <SearchStackNavigator.Screen
          name="SearchScreen"
          component={Search}
        ></SearchStackNavigator.Screen>
        <SearchStackNavigator.Screen
          name="Details"
          component={DetailsScreen}
        ></SearchStackNavigator.Screen>
      </SearchStackNavigator.Group>
    </SearchStackNavigator.Navigator>
  );
};

const AboutStackScreen = () => {
  const scheme = useColorScheme();
  return (
    <AboutStackNavigator.Navigator>
      <AboutStackNavigator.Group
        screenOptions={
          scheme === "dark"
            ? stackGroupScreenOptions.dark
            : stackGroupScreenOptions.light
        }
      >
        <AboutStackNavigator.Screen
          name="AboutScreen"
          component={About}
        ></AboutStackNavigator.Screen>
      </AboutStackNavigator.Group>
    </AboutStackNavigator.Navigator>
  );
};

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Rechercher") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Favoris") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Rechercher" component={SearchStackScreen} />
      <Tab.Screen name="Favoris" component={AboutStackScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : MyLightTheme}>
      <StatusBar hidden={true} />
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
