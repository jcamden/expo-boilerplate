import { Center } from '../../Center';
import React from 'react';
import { Text } from 'react-native';
import tailwind from 'tailwind-rn';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <Center>
      <Text style={tailwind('text-red-500')}> I am a register screen.</Text>
    </Center>
  );
};
