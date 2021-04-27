import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';

import { AuthContext } from '../../state/AuthProvider';
import { Feed } from '../../ui/screens/Feed/Feed';
import { addProductScreens } from '../shared/addProductScreens';
import { HomeParamList } from './HomeParamList';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            const { logout } = useContext(AuthContext);
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text style={tailwind('text-blue-500 mr-4')}>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      {addProductScreens(Stack as any)}
    </Stack.Navigator>
  );
};
