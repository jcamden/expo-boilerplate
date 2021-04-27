import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';

import { HomeStackNavProps } from '../../../Routes/HomeStack/HomeParamList';
import { Center } from '../../utils/Center/Center';

export const EditProduct: React.FC<HomeStackNavProps<'EditProduct'>> = ({
  route,
  navigation,
}) => {
  // e.g.
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    (async () => {
      // api call with new form state
      // await apiCall(formState);
      navigation.goBack();
    })();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
};
