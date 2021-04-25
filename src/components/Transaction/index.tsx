/* eslint-disable import/no-duplicates */
import React, { useMemo } from 'react';

import { format } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import TransactionCard from './TransactionCard';

import { Container } from './styles';

interface TransactionObject {
  id: string;
  type: 'income' | 'outcome';
  description: string;
  category: string;
  amount: number;
}

interface TransactionProps {
  date: Date;
  transactions: Array<TransactionObject>;
}

const Transaction: React.FC<TransactionProps> = ({ date, transactions }) => {
  const formattedDate = useMemo(() => {
    const formatWeekday = format(new Date(date), 'EEEE', {
      locale: ptbr,
    });
    const formatDate = format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
      locale: ptbr,
    });

    return {
      weekday: formatWeekday,
      date: formatDate,
    };
  }, [date]);

  return (
    <Container>
      <header>
        <span>
          <strong>{formattedDate.weekday} | </strong> {formattedDate.date}
        </span>
      </header>

      {transactions.map(transaction => (
        <TransactionCard
          key={transaction.id}
          type={transaction.type}
          description={transaction.description}
          category={transaction.category}
          amount={transaction.amount}
        />
      ))}
    </Container>
  );
};

export default Transaction;
