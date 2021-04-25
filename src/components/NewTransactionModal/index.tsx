import React, { useCallback, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { ArrowDownCircle, ArrowUpCircle } from '@styled-icons/ionicons-outline';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../Input';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TypeTransaction = 'income' | 'outcome';

type NewTransactionInput = {
  description: string;
  amount: number;
  category: string;
};

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();
  const formRef = useRef<FormHandles>(null);

  const [type, setType] = useState<TypeTransaction>('income');

  const handleCreateNewTransaction = useCallback(
    async (data: NewTransactionInput) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          description: Yup.string().required('Descrição obrigatória'),
          amount: Yup.string().required('Valor obrigatório'),
          category: Yup.string().required('Categoria obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { amount, category, description } = data;

        await createTransaction({ amount, category, description, type });
        onRequestClose();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [onRequestClose, type, createTransaction],
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

        <Input
          name="description"
          placeholder="Descrição da transação"
          type="text"
        />
        <Input name="amount" placeholder="Valor" type="number" step=".01" />

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

        <Input name="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};

export default NewTransactionModal;
