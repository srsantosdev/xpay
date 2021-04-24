import React from 'react';

import { Card, Grid } from '@styled-icons/ionicons-outline';

import xpaylogo from '../../assets/logo.svg';

import {
  Container,
  ContainerLogo,
  MenuButton,
  MenuContainer,
  ProfileButton,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <ContainerLogo>
        <img src={xpaylogo} alt="Xpay" />
      </ContainerLogo>

      <MenuContainer>
        <MenuButton to="/overview">
          <Grid />
          <span>Visão Geral</span>
        </MenuButton>
        <MenuButton to="/transactions">
          <Card />
          <span>Transações</span>
        </MenuButton>
      </MenuContainer>

      <ProfileButton>
        <img src="https://github.com/srsantosdev.png" alt="Samuel Ramos" />
        <div>
          <strong>Samuel Ramos</strong>
          <span>+55 75 9 9120 6853</span>
        </div>
      </ProfileButton>
    </Container>
  );
};

export default Sidebar;
