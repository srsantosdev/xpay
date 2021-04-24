import React from 'react';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

export default Dashboard;
