import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NewDetail from '../components/NewsDetail';

const StackNavigation = createStackNavigator();


export default function App() {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
          const translateX = current.progress.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [screen.width, 0, 0],
          });

          const opacity = next?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0, 0],
          });

          return {
            cardStyle: {
              opacity,
              transform: [{ translateX }],
              backgroundColor: '#ffffff3d'
            }
          };
        },
      }}
    >
      <StackNavigation.Screen name="Home" component={Home} />
      <StackNavigation.Screen name="Detail" component={Detail} />
      <StackNavigation.Screen name="NewDetail" component={NewDetail} />
    </StackNavigation.Navigator>
  );
}
