import { LogOut, Search } from '@styled-icons/ionicons-outline';
import React from 'react';
import LineChart from '../../components/LineChart';

import Sidebar from '../../components/Sidebar';
import { optionsLineChart } from './chartOptions';

import { Container, Content, Summary, ContainerGraphic } from './styles';

const Dashboard: React.FC = () => {
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
    <Container>
      <Sidebar />
      <Content>
        <header>
          <div>
            <h1>Visão Geral</h1>
            <h2>Bem vindo, Samuel Ramos!</h2>
          </div>

          <div>
            <button type="button">
              <Search />
            </button>

            <button type="button">
              <LogOut />
            </button>
          </div>
        </header>

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
      </Content>
    </Container>
  );
};

export default Dashboard;
