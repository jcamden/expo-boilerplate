import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { AuthNavProps } from '../../../routes';
import { AuthContext } from '../../../state';
import { Center } from '../../utils';

export const Login: React.FC<AuthNavProps<'Login'>> = ({
  navigation,
  route,
}) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text style={tailwind('text-red-500')}> route name: {route.name}</Text>
      <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
};
