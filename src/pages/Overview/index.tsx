/* eslint-disable import/no-duplicates */
import React, { useEffect, useMemo, useState } from 'react';

import { format } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import Dashboard from '../../layouts/Dashboard';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';
import { api } from '../../services/api';

import { optionsLineChart } from './chartOptions';
import { Container, Summary, ContainerGraphic } from './styles';

type TransactionSummary = {
  date: Date;
  total: number;
};

const Overview: React.FC = () => {
  const { user } = useAuth();
  const { transactions } = useTransactions();

  const [historyTransactions, setHistoryTransactions] = useState<
    TransactionSummary[]
  >([]);

  const historyUserTransactions = useMemo(() => {
    return historyTransactions.map(({ date, total }) => {
      return {
        date: format(new Date(date), 'dd/MM', { locale: ptbr }),
        total,
      };
    });
  }, [historyTransactions]);

  const summary = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.incomes += Number(transaction.amount);
          accumulator.total += Number(transaction.amount);
        } else {
          accumulator.outcomes += Number(transaction.amount);
          accumulator.total -= Number(transaction.amount);
        }

        return accumulator;
      },
      {
        incomes: 0,
        outcomes: 0,
        total: 0,
      },
    );
  }, [transactions]);

  const formattedIncomes = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(summary.incomes);
  }, [summary.incomes]);

  const formattedOutcomes = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(summary.outcomes);
  }, [summary.outcomes]);

  const formattedTotal = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(summary.total);
  }, [summary.total]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/transactions/summary', {
        params: { user_id: user.id },
      });

      setHistoryTransactions(response.data);
    }

    loadData();
  }, [user]);

  const dateStringified = historyUserTransactions.map(({ date }) => date);
  const values = historyUserTransactions.map(({ total }) => total);

  const dataLineChart: Chart.ChartData = {
    labels: dateStringified,
    datasets: [
      {
        label: 'R$',
        data: values,
        borderWidth: 1,
        backgroundColor: 'rgba(51, 225, 237, 0.2)',
        borderColor: 'rgba(51, 225, 237)',
        pointBackgroundColor: 'rgba(51, 225, 237)',
        pointRadius: 1,
        type: 'scatter',
        showLine: true,
      },
    ],
  };

  return (
    <Dashboard>
      <Container>
        <Header title="Visão Geral" subtitle={`Bem vindo, ${user.name}!`} />

        <Summary>
          <div className="income">
            <span>Entradas</span>
            <strong>{formattedIncomes}</strong>
          </div>

          <div className="outcome">
            <span>Saídas</span>
            <strong>{formattedOutcomes}</strong>
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formattedTotal}</strong>
          </div>
        </Summary>

        <h3>Resumo</h3>

        <ContainerGraphic>
          <main>
            <LineChart data={dataLineChart} options={optionsLineChart} />
          </main>
        </ContainerGraphic>
      </Container>
    </Dashboard>
  );
};

export default Overview;
