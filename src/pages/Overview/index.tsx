import React from 'react';

import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

import Dashboard from '../../layouts/Dashboard';

import { optionsLineChart } from './chartOptions';

import { Container, Summary, ContainerGraphic } from './styles';

const Overview: React.FC = () => {
  const dataLineChart: Chart.ChartData = {
    labels: [
      '20/04',
      '21/04',
      '22/04',
      '23/04',
      '24/04',
      '25/04',
      '26/04',
      '27/04',
      '28/04',
    ],
    datasets: [
      {
        label: 'R$',
        data: [100, 50, 300, 270, 250, 150, 175, 280, 299],
        borderWidth: 1,
        backgroundColor: 'rgba(51, 225, 237, 0.4)',
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
        <Header title="Visão Geral" subtitle="Bem vindo, Samuel Ramos!" />

        <Summary>
          <div className="income">
            <span>Entradas</span>
            <strong>R$ 5.628</strong>
          </div>

          <div className="outcome">
            <span>Saídas</span>
            <strong>R$ 2.250</strong>
          </div>

          <div className="total">
            <span>Total</span>
            <strong>R$ 3.378</strong>
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
