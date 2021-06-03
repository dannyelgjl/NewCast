import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

const HomeNavigation = createStackNavigator();


export default function App() {
  return (
    <HomeNavigation.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <HomeNavigation.Screen name="Home" component={Home} />
    </HomeNavigation.Navigator>
  );
}
