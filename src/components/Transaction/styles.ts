import styled from 'styled-components';

export const Container = styled.section`
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
