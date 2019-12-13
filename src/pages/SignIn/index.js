import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <div className="boxform">
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <p>SEU E-MAIL:</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <p>SUA SENHA:</p>
        <Input name="password" type="password" placeholder="*************" />
        <button type="submit"> Acessar</button>
      </Form>
    </div>
  );
}
