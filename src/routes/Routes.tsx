import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { AuthContext } from '../state/AuthProvider';
import { Center, Login, Register } from '../ui';
import { AuthParamList } from './AuthParamList';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userJSONString = await AsyncStorage.getItem('user');
      userJSONString
        ? (async () => {
            //decode it
          })()
        : setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Center>
          <ActivityIndicator size="large" color="green" />
        </Center>
      ) : user ? (
        <Center>
          <Text>You exist.</Text>
        </Center>
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
