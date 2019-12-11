import React from 'react';

// import { Container } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <div className="boxform">
      <img src={logo} alt="GoBarber" />

      <form>
        <p>SEU E-MAIL</p>
        <input type="email" placeholder="exemplo@email.com" />
        <p>SUA SENHA</p>
        <input type="password" placeholder="*************" />
        <button type="submit"> Acessar</button>
      </form>
    </div>
  );
}
