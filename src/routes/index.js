import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SplashScreen } from '../screens';

export const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
