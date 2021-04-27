import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Center } from '../Center/Center';

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <Center>
      <ActivityIndicator size="large" color="green" />
    </Center>
  );
};
