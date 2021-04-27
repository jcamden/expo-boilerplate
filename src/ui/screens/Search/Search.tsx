import faker from 'faker';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';

import { SearchStackNavProps } from '../../../Routes/SearchStack/SearchParamList';
import { Center } from '../../utils/Center/Center';

export const Search: React.FC<SearchStackNavProps<'Search'>> = ({
  navigation,
}) => {
  // just to make it look like its searching
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(true);
        }}
      />
      {show && (
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
      )}
    </Center>
  );
};
