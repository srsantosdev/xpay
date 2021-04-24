import React, { FormEvent, useCallback, useState } from 'react';
import ReactModal from 'react-modal';

import { ArrowDownCircle, ArrowUpCircle } from '@styled-icons/ionicons-outline';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TypeTransaction = 'income' | 'outcome';

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState<TypeTransaction>('income');

  const handleCreateNewTransaction = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      setType('income');
      setTitle('');
      setAmount(0);
      setCategory('');

      onRequestClose();
    },
    [onRequestClose],
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Título"
          type="text"
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            radioType="income"
            isActive={type === 'income'}
            type="button"
            onClick={() => setType('income')}
          >
            <ArrowUpCircle />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            radioType="outcome"
            isActive={type === 'outcome'}
            type="button"
            onClick={() => setType('outcome')}
          >
            <ArrowDownCircle />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};

export default NewTransactionModal;
