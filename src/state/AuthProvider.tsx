import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => null,
  logout: () => null,
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: 'bob' };
          setUser(fakeUser);
          // TODO trycatch and handle error
          AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        },
        logout: () => {
          // TODO trycatch and handle error
          AsyncStorage.removeItem('user');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
