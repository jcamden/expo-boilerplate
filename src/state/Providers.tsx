import React from 'react';

import { Routes } from '../routes/Routes';
import { AuthProvider } from './AuthProvider';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
