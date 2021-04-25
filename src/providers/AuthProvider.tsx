import React, { createContext, useCallback, useState } from 'react';
import { api } from '../services/api';
import { authKeys } from '../storage/auth.keys';

interface User {
  id: string;
  name: string;
  document: string;
}

interface Credentials {
  document: string;
  password: string;
}

export type AuthContextData = {
  user: User;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
};

interface AuthData {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem(authKeys.token);
    const user = localStorage.getItem(authKeys.user);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ document, password }: Credentials) => {
    const response = await api.post('/users/sessions', {
      document,
      password,
    });

    const { token, user } = response.data;

    const stringifiedUser = JSON.stringify(user);

    localStorage.setItem(authKeys.token, token);
    localStorage.setItem(authKeys.user, stringifiedUser);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(authKeys.token);
    localStorage.removeItem(authKeys.user);

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
