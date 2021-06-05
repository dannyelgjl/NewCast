import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import NewsDetail from '../pages/NewsDetail';
import NewsList from '../pages/NewsList';
import NewNews from '../pages/NewNews';

const StackNavigation = createStackNavigator();

export default function App() {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92, 90, 91, 0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 8,
        },
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
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />

      <StackNavigation.Screen
        name="NewsDetail"
        component={NewsDetail}
      />
      <StackNavigation.Screen name="NewsList" component={NewsList} />
      <StackNavigation.Screen name="NewNews" component={NewNews} />
    </StackNavigation.Navigator>
  );
}
