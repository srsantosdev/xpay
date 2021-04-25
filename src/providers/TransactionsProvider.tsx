import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'outcome';
  created_at: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = useCallback(
    async ({ amount, category, type, description }: TransactionInput) => {
      const response = await api.post(
        '/transactions',
        {
          description,
          amount,
          category,
          type,
          date: new Date(),
        },
        {
          params: { user_id: user.id },
        },
      );

      const transaction = response.data;

      setTransactions(state => [...state, transaction]);
    },
    [user],
  );

  useEffect(() => {
    async function loadData() {
      if (user) {
        const response = await api.get('/transactions', {
          params: { user_id: user.id },
        });

        setTransactions(response.data);
      }
    }

    loadData();
  }, [user]);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
