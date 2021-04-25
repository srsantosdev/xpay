import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Dashboard from '../../layouts/Dashboard';
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';

import { Transaction as TransactionType } from '../../providers/TransactionsProvider';

import { Container, Content } from './styles';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

interface TransactionDetail {
  date: Date;
  transactions: TransactionType[];
}

const Transactions: React.FC = () => {
  const { user } = useAuth();

  const [transactionsDetails, setTransactionsDetails] = useState<
    TransactionDetail[]
  >([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/transactions/details', {
        params: { user_id: user.id },
      });

      setTransactionsDetails(response.data);
    }

    loadData();
  }, [user]);

  return (
    <Dashboard>
      <Container>
        <Header
          title="Suas transações"
          subtitle="Acompanhe os detalhes das suas transações aqui"
        />

        <Content>
          {transactionsDetails.map(transactionDetail => (
            <Transaction
              key={uuid()}
              date={transactionDetail.date}
              transactions={transactionDetail.transactions}
            />
          ))}
        </Content>
      </Container>
    </Dashboard>
  );
};

export default Transactions;
