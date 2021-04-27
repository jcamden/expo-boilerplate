import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Login } from '../../ui/screens/Login/Login';
import { Register } from '../../ui/screens/Register/Register';
import { AuthParamList } from './AuthParamList';

const Stack = createStackNavigator<AuthParamList>();

interface AuthStackProps {}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // all screens options
        screenOptions={{ header: () => null }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          // per screen options
          // options={{ headerTitle: 'Sign In' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          // per screen options
          // options={{ headerTitle: 'Sign Up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
