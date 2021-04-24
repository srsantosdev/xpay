import { Add, Remove } from '@styled-icons/ionicons-outline';
import React, { useMemo } from 'react';

import { Container } from './styles';

export interface TransactionsCardProps {
  type: 'income' | 'outcome';
  description: string;
  category: string;
  amount: number;
}

const TransactionCard: React.FC<TransactionsCardProps> = ({
  type,
  description,
  category,
  amount,
}) => {
  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(amount);
  }, [amount]);

  return (
    <Container type={type}>
      <div className="icon-transaction">
        {type === 'income' ? <Add /> : <Remove />}
      </div>

      <div className="description">
        <div>
          <strong>{description}</strong>
          <span>{category}</span>
        </div>

        <p>{formattedAmount}</p>
      </div>
    </Container>
  );
};

export default TransactionCard;
