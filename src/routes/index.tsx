import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import NewsDetail from '../pages/NewsDetail';
import NewsList from '../pages/NewsList'

const StackNavigation = createStackNavigator();


export default function App() {
  return (
    <StackNavigation.Navigator
      screenOptions={{
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
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name="NewsDetail"
        component={NewsDetail}
      />
      <StackNavigation.Screen name="NewsList" component={NewsList} />
    </StackNavigation.Navigator>
  );
}
