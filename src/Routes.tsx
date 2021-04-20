import { Login, Register } from './components';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

interface RoutesProps {}

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
