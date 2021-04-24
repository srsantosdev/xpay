import { Add, LogOut } from '@styled-icons/ionicons-outline';
import React, { useCallback, useState } from 'react';
import NewTransactionModal from '../NewTransactionModal';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Container>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className="container-buttons">
          <button
            type="button"
            className="large"
            onClick={handleOpenNewTransactionModal}
          >
            <Add />
            <span>Adicionar transação</span>
          </button>

          <button type="button">
            <LogOut />
          </button>
        </div>
      </Container>
    </>
  );
};

export default Header;
