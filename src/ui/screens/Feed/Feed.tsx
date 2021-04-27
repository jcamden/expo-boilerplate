import faker from 'faker';
import React from 'react';
import { Button, FlatList, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { HomeStackNavProps } from '../../../Routes/HomeStack/HomeParamList';
import { Center } from '../../utils/Center/Center';

export const Feed: React.FC<HomeStackNavProps<'Feed'>> = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        style={tailwind('w-full')}
        renderItem={({ item }) => {
          const itemStr = item();
          return (
            <Button
              title={itemStr}
              onPress={() => {
                navigation.navigate('Product', {
                  name: itemStr,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, index) => product + index.toString()}
        data={Array.from(Array(50), () => faker.commerce.product)}
      />
    </Center>
  );
};
