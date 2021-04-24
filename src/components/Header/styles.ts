import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
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

  > div.container-buttons {
    display: flex;
    align-items: center;

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

    button.large {
      width: max-content;
      height: 4rem;
      padding: 0 1.6rem;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      background: #25b3cb;
      color: #fff;
      font-weight: 500;

      svg {
        width: 2.4rem;
      }

      &:hover {
        background: ${shade(0.2, '#25b3cb')};
      }
    }
  }
`;
