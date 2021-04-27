import { StackNavigationState, TypedNavigator } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { StackNavigationEventMap } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

import { EditProduct } from '../../ui/organisms/EditProduct/EditProduct';
import { Product } from '../../ui/organisms/Product/Product';
import { HomeParamList } from '../HomeStack/HomeParamList';
import { SearchParamList } from '../SearchStack/SearchParamList';

// for recycling screens in different stacks

export const addProductScreens = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState<Record<string, object | undefined>>,
    StackNavigationOptions,
    StackNavigationEventMap,
    ({
      initialRouteName,
      children,
      screenOptions,
      ...rest
    }: {
      initialRouteName: 'Feed' | 'Search';
      children: any;
      screenOptions: any;
    }) => JSX.Element
  >
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit form
                route.params.submit?.current();
              }}
            >
              <Text style={tailwind('mr-4 text-blue-500')}>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
    </>
  );
};
