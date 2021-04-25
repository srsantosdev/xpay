import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import xpaylogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Header, Content } from './styles';

interface Credentials {
  document: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: Credentials) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          document: Yup.string().required('CPF obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          document: data.document,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <div>
        <Header>
          <img src={xpaylogo} alt="XPay" />

          <span>
            Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
          </span>
        </Header>

        <Content>
          <h2>Faça seu login</h2>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="document" placeholder="CPF" type="text" />
            <Input name="password" placeholder="Senha" type="password" />

            <Button loading={loading} type="submit">
              Entrar
            </Button>
          </Form>
        </Content>
      </div>
    </Container>
  );
};

export default SignIn;
