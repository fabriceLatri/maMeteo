import React from 'react';
import About from './components/About';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './components/navigation/Navigation';

// const Tab = createBottomTabNavigator();

const App = () => {
  return <Navigation />;
};

export default App;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar hidden={true} />
//       <Tab.Navigator
//         screenOptions={({ route, navigation }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Search') {
//               iconName = focused ? 'ios-search' : 'ios-search-outline';
//             } else if (route.name === 'About') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           headerStyle: {
//             backgroundColor: 'tomato'
//           },
//           headerTintColor: '#FFF',
//           tabBarHideOnKeyboard: true,

//         })}>
//         <Tab.Screen
//           name='Search'
//           component={Search}

//         />
//         <Tab.Screen name='About' component={About} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
