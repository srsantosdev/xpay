import styled from 'styled-components';
import { TransactionsCardProps } from '.';

type Props = Pick<TransactionsCardProps, 'type'>;

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  div.icon-transaction {
    color: ${props => (props.type === 'income' ? '#59ce2b' : '#ff3d57')};
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.5rem;
    }
  }

  div.description {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  strong {
    font-weight: 400;
  }

  span {
    font-weight: 500;
    font-size: 1.2rem;
    color: #c5cbd1;
    text-transform: uppercase;
  }

  p {
    font-weight: 500;
    font-size: 1.4rem;
    color: ${props => (props.type === 'income' ? '#59ce2b' : '#ff3d57')};
  }

  & + div {
    margin-top: 1.6rem;
  }
`;
