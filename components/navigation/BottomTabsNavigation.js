import React from 'react';
import About from '../About';
import Search from '../Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
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
        headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: '#FFF',
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}
