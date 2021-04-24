import React from 'react';

import Header from '../../components/Header';
import Transaction from '../../components/Transaction';
import Dashboard from '../../layouts/Dashboard';

import { Container, Content } from './styles';

const Transactions: React.FC = () => {
  return (
    <Dashboard>
      <Container>
        <Header
          title="Suas transações"
          subtitle="Acompanhe os detalhes das suas transações aqui"
        />

        <Content>
          <Transaction
            date={new Date()}
            transactions={[
              {
                id: '1',
                amount: 300,
                category: 'Freelancer',
                description: 'Desenvolvimento de site',
                type: 'income',
              },
              {
                id: '2',
                amount: 200,
                category: 'Compras',
                description: 'Supermercado',
                type: 'outcome',
              },
            ]}
          />
          <Transaction
            date={new Date(2021, 3, 23)}
            transactions={[
              {
                id: '5',
                amount: 500,
                category: 'Compras',
                description: 'Supermercado',
                type: 'outcome',
              },
            ]}
          />
        </Content>
      </Container>
    </Dashboard>
  );
};

export default Transactions;
