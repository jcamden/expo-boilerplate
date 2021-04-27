import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../state/AuthProvider';
import { Loading } from '../ui/utils/Loading/Loading';
import { AppTabs } from './AppTabs/AppTabs';
import { AuthStack } from './AuthStack/AuthStack';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userJSONString = await AsyncStorage.getItem('user');
      console.log(userJSONString);
      // faking login for now. In reality, decode and login.
      userJSONString && login();
      setLoading(false);
    })();
  }, []);

  return <>{loading ? <Loading /> : user ? <AppTabs /> : <AuthStack />}</>;
};
