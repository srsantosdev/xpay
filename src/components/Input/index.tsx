import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Component } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Component
      ref={inputRef}
      hasError={!!error}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

export default Input;
