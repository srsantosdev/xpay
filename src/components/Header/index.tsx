import { Add, LogOut } from '@styled-icons/ionicons-outline';
import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="container-buttons">
        <button type="button" className="large">
          <Add />
          <span>Adicionar transação</span>
        </button>

        <button type="button">
          <LogOut />
        </button>
      </div>
    </Container>
  );
};

export default Header;
