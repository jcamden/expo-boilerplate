import React, { useContext } from 'react';
import { Button, Text } from 'react-native';

import { AuthContext } from '../../../state/AuthProvider';
import { Center } from '../../utils/Center/Center';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>home</Text>
      <Button title="logout" onPress={() => logout()} />
    </Center>
  );
};
