import styled from 'styled-components';

export const Container = styled.main`
  grid-area: CONTENT;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  padding: 2.4rem 3.2rem;
`;

export const Content = styled.div`
  margin-top: 3.2rem;
`;

export const TransactionSection = styled.section`
  > header {
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;
    border-bottom: 0.1rem solid rgba(197, 203, 209, 0.5);

    span {
      font-size: 1.2rem;
      font-weight: 500;
    }

    strong {
      font-weight: 400;
      color: #c5cbd1;

      text-transform: uppercase;
    }
  }

  & + section {
    margin-top: 3.2rem;
  }
`;

interface TransactionsCardProps {
  type: 'income' | 'outcome';
}

export const TransactionsCard = styled.div<TransactionsCardProps>`
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
