import { useContext } from 'react';
import {
  TransactionsContextData,
  TransactionsContext,
} from '../providers/TransactionsProvider';

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}
