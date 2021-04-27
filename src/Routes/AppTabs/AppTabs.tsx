import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { HomeStack } from '../HomeStack/HomeStack';
import { SearchStack } from '../SearchStack/SearchStack';
import { AppParamList } from './AppParamList';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName =
              route.name === 'Home'
                ? focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
                : route.name === 'Search'
                ? focused
                  ? 'ios-list-circle'
                  : 'ios-list-circle-outline'
                : undefined;

            // You can return any component that you like here!
            return route.name === 'Home' ? (
              <MaterialCommunityIcons
                name={focused ? 'shield-home' : 'shield-home-outline'}
                size={size}
                color={color}
              />
            ) : route.name === 'Search' ? (
              <FontAwesome5 name={'search'} size={size - 6} color={color} />
            ) : undefined;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name="Home" component={HomeStack} />
        <Tabs.Screen name="Search" component={SearchStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
