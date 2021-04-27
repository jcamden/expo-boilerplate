import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Search } from '../../ui/screens/Search/Search';
import { addProductScreens } from '../shared/addProductScreens';
import { SearchParamList } from './SearchParamList';

const Stack = createStackNavigator<SearchParamList>();

export const SearchStack: React.FC<SearchParamList> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {addProductScreens(Stack as any)}
    </Stack.Navigator>
  );
};
