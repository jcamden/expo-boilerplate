import { Center } from '../../Center';
import React from 'react';
import { Text } from 'react-native';
import tailwind from 'tailwind-rn';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Center>
      <Text style={tailwind('text-red-500')}> I am a login screen.</Text>
    </Center>
  );
};
