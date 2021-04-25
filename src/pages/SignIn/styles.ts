import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > div {
    width: 100%;
    max-width: 980px;
    margin: 3.2rem auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 10rem;
  }

  span {
    color: #c5cbd3;

    > a {
      text-decoration: none;
      font-weight: 500;
      color: #25b3cb;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10rem;

  > h2 {
    font-size: 2.4rem;
  }

  > form {
    margin-top: 4rem;
    width: 40rem;
  }

  button[type='submit'] {
    width: 100%;
    height: 5rem;
    padding: 0 1.5rem;
    background: #25b3cb;

    border-radius: 1rem;
    border: 0;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
