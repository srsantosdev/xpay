import { darken } from 'polished';
import styled, { css } from 'styled-components';

type InputProps = {
  hasError?: boolean;
};

export const Component = styled.input<InputProps>`
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;

  border-radius: 1rem;
  border: 1px solid #d7d7d7;

  background: #e7e9ee;

  font-weight: 400;
  font-size: 1.4rem;

  &::placeholder {
    color: #1e1e2c;
  }

  &:hover,
  &:focus {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #e83030;
    `}

  & + input {
    margin-top: 1.6rem;
  }
`;
