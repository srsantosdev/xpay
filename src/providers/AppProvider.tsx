import React from 'react';
import { AuthProvider } from './AuthProvider';
import { TransactionsProvider } from './TransactionsProvider';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </AuthProvider>
  );
};

export default AppProvider;
