import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 'SIDEBAR CONTENT';
  grid-template-columns: 30rem auto;
  overflow: hidden;
`;

export const Content = styled.main`
  grid-area: CONTENT;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  padding: 2.4rem 3.2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 300;
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      color: #c5cbd1;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: 0;
      border-radius: 1rem;
      background-color: #fff;
      color: #1e1e2c;
      box-shadow: 0px 0px 3px 0px rgba(51, 225, 237, 0.2);

      transition: 0.2s ease-in-out;

      svg {
        width: 2rem;
      }

      & + button {
        margin-left: 1.6rem;
      }

      &:hover {
        color: #25b3cb;
      }
    }
  }

  > h3 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 2.4rem;
    color: #25b3cb;

    text-transform: uppercase;
  }
`;

export const Summary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  margin-top: 2.4rem;

  > div {
    background: #fff;
    border-radius: 1rem;
    padding: 2.4rem;

    box-shadow: 0px 0px 20px 0px rgba(51, 225, 237, 0.05);

    display: flex;
    flex-direction: column;

    span {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 300;
      color: #c5cbd3;
    }

    strong {
      font-weight: 400;
      font-size: 3.2rem;
      display: inline-block;
      margin-top: 0.8rem;
    }

    &.income {
      color: #59ce2b;
    }

    &.outcome {
      color: #ff3d57;
    }

    &.total {
      background-color: rgba(51, 225, 237, 0.2);

      > span {
        color: #1e1e2c;
      }

      > strong {
        color: #25b3cb;
      }
    }
  }
`;

export const ContainerGraphic = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  margin-top: 0.8rem;
  padding: 2.4rem;

  height: 35rem;

  > main {
    flex: 1;
  }
`;
