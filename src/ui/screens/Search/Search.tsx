import React from 'react';
import { Text } from 'react-native';

import { Center } from '../../utils/Center/Center';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Center>
      <Text>search</Text>
    </Center>
  );
};
