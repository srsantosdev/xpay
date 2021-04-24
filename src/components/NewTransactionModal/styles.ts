import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

interface RadioBoxProps {
  radioType: 'income' | 'outcome';
  isActive?: boolean;
}

const colors = {
  income: '#33cc95',
  outcome: '#e52e4d',
};

export const Container = styled.form`
  h2 {
    color: #1e1e2c;
    font-size: 2rem;

    font-weight: 300;

    margin-bottom: 3.2rem;
  }

  input {
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

    & + input {
      margin-top: 1.6rem;
    }
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

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 5rem;
  border: 1px solid #d7d7d7;
  border-radius: 1rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.radioType])
      : 'transparent'};

  ${props =>
    props.radioType === 'income' &&
    css`
      color: ${props.isActive && colors[props.radioType]};
    `}

  ${props =>
    props.radioType === 'outcome' &&
    css`
      color: ${props.isActive && colors[props.radioType]};
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.4rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`;
