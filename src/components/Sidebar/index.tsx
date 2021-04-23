import { Card, Grid } from '@styled-icons/ionicons-outline';
import React from 'react';

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
        <MenuButton className="active">
          <Grid />
          <span>Visão Geral</span>
        </MenuButton>
        <MenuButton>
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
