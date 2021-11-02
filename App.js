import React from 'react';
import About from './components/About';
import Home from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  // return <About />;
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
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
        })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
