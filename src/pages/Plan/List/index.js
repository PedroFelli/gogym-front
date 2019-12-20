import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import api from '~/services/api';

import { Content, Title } from './styles';

import Container from '~/components/Container';
import Conteudo from '~/components/Conteudo';
import Higher from '~/components/Higher';
import ButtonSubmit from '~/components/Button/Submit';

export default function List() {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    async function loadingPlan() {
      const response = await api.get('plano');

      setPlanos(response.data);
    }
    loadingPlan();
  }, []);

  return (
    <Container>
      <Higher>
        <Title>Gerenciamento planos</Title>
        <div>
          <Link to="/plans/create">
            <ButtonSubmit>+ Cadastrar</ButtonSubmit>
          </Link>
        </div>
      </Higher>
      <Conteudo>
        <Content>
          <table>
            <tbody>
              <tr>
                <th>TÍTULO</th>
                <th>DURAÇÃO</th>
                <th>VALOR p/ MÊS</th>
              </tr>

              {planos.map(plano => (
                <tr className="dados" key={plano.id}>
                  <td>{plano.title}</td>
                  <td>{plano.price}</td>
                  <td>{plano.duration}</td>
                  <td>
                    <div className="botoes">
                      <button type="submit" className="editar">
                        editar
                      </button>
                      <button type="submit" className="apagar">
                        apagar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Conteudo>
    </Container>
  );
}
