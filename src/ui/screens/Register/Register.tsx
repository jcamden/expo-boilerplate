import React from 'react';
import { Button, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { AuthNavProps } from '../../../routes';
import { Center } from '../../utils';

export const Register: React.FC<AuthNavProps<'Login'>> = ({ navigation }) => {
  return (
    <Center>
      <Text style={tailwind('text-red-500')}> I am a register screen.</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
};
