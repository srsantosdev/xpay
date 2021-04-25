import React, { useMemo } from 'react';

import { Card, Grid } from '@styled-icons/ionicons-outline';

import xpaylogo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/useAuth';
import { createMask } from '../../utils/createMask';

import {
  Container,
  ContainerLogo,
  MenuButton,
  MenuContainer,
  ProfileButton,
} from './styles';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  const documentMask = useMemo(
    () => createMask(user.document, '###.###.###-##'),
    [user],
  );

  return (
    <Container>
      <ContainerLogo>
        <img src={xpaylogo} alt="Xpay" />
      </ContainerLogo>

      <MenuContainer>
        <MenuButton to="/overview" activeClassName="active">
          <Grid />
          <span>Visão Geral</span>
        </MenuButton>

        <MenuButton to="/transactions" activeClassName="active">
          <Card />
          <span>Transações</span>
        </MenuButton>
      </MenuContainer>

      <ProfileButton>
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=1e1e2c&color=25b3cb&font-size=0.4&bold=true&size=180`}
          alt={user.name}
        />

        <div>
          <strong>{user.name}</strong>
          <span>{documentMask}</span>
        </div>
      </ProfileButton>
    </Container>
  );
};

export default Sidebar;
