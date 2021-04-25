import React, { useCallback, useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import xpaylogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Header, Content } from './styles';
import { api } from '../../services/api';

interface UserInput {
  document: string;
  name: string;
  password: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: UserInput) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          document: Yup.string().required('CPF obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
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
    [history],
  );

  return (
    <Container>
      <div>
        <Header>
          <img src={xpaylogo} alt="XPay" />

          <span>
            <Link to="/">Cancelar cadastro</Link>
          </span>
        </Header>

        <Content>
          <h2>Complete seu cadastro</h2>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="document" placeholder="CPF" />
            <Input name="name" placeholder="Nome" />
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

export default Register;
