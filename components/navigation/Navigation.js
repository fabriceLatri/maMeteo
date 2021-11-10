import React from 'react';
import About from '../About';
import Search from '../Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../DetailsScreen';

const SearchStackNavigator = createNativeStackNavigator();
const AboutStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#FFF',
        }}>
        <SearchStackNavigator.Screen
          name='SearchScreen'
          component={Search}></SearchStackNavigator.Screen>
        <SearchStackNavigator.Screen
          name='Details'
          component={DetailsScreen}></SearchStackNavigator.Screen>
      </SearchStackNavigator.Group>
    </SearchStackNavigator.Navigator>
  );
};

const AboutStackScreen = () => {
  return (
    <AboutStackNavigator.Navigator>
      <AboutStackNavigator.Screen
        name='AboutScreen'
        component={About}></AboutStackNavigator.Screen>
    </AboutStackNavigator.Navigator>
  );
};

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'About') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}>
      <Tab.Screen name='Search' component={SearchStackScreen} />
      <Tab.Screen name='About' component={AboutStackScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
