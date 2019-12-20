import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';

import logo from '~/assets/logo-horizontal.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympoint" />
          <Link to="/">ALUNOS</Link>
          <Link to="/">PLANOS</Link>
          <Link to="/">MATRICULAS</Link>
          <Link to="/">PEDIDOS DE AUXILIO </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Pedro Fellipe</strong>
              <br />
              <Link to="/sair">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
