import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { AuthContext } from '../state/AuthProvider';
import { Login } from '../ui/screens/Login/Login';
import { Register } from '../ui/screens/Register/Register';
import { Center } from '../ui/utils/Center/Center';
import { AuthParamList } from './AuthParamList';
import { AppTabs } from './tabs/AppTabs';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userJSONString = await AsyncStorage.getItem('user');
      console.log(userJSONString);
      // faking login for now. In reality, decode and login.
      userJSONString && login();
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Center>
          <ActivityIndicator size="large" color="green" />
        </Center>
      ) : user ? (
        <AppTabs />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            // all screens options
            // screenOptions={{ header: () => null }}
            initialRouteName="Login"
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerTitle: 'Sign In' }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              // per screen options
              options={{ headerTitle: 'Sign Up' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
