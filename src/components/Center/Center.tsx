import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      {children}
    </View>
  );
};
