import React from 'react';
import { Button, Text } from 'react-native';

import { HomeStackNavProps } from '../../../Routes/HomeStack/HomeParamList';
// import { SearchStackNavProps } from '../../../Routes/SearchStack/SearchParamList';
import { Center } from '../../utils/Center/Center';

export const Product: React.FC<
  HomeStackNavProps<'Product'>
  // breaks, but just using either on is fine
  // | SearchStackNavProps<'Product'>
> = ({ route, navigation }) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit Product"
        onPress={() =>
          navigation.navigate('EditProduct', { name: route.params.name })
        }
      />
    </Center>
  );
};
