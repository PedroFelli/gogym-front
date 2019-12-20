import React from 'react';

import { Form } from '@rocketseat/unform';
import Content from './styles';

import Container from '~/components/Container';
import Conteudo from '~/components/Conteudo';
import Higher from '~/components/Higher';
import ButtonSubmit from '~/components/Button/Submit';
import ButtonCancel from '~/components/Button/Cancel';
import { InputLarge, InputSmall } from '~/components/Input';

export default function EditPlan() {
  return (
    <Container>
      <Higher>
        <h1>Edição de plano</h1>
        <div>
          <ButtonCancel>Voltar</ButtonCancel>
          <ButtonSubmit>Salvar</ButtonSubmit>
        </div>
      </Higher>
      <Conteudo>
        <Content>
          <Form>
            TÍTULO DO PLANO
            <br />
            <InputLarge name="name" type="text" placeholder="Diamond" />
            <div className="grid-3">
              <div className="item">
                DURAÇÃO (em meses)
                <InputSmall name="duration" type="text" placeholder="Diamond" />
              </div>
              <div className="item">
                PREÇO MENSAL
                <InputSmall name="price" type="text" placeholder="Diamond" />
              </div>
              <div className="item">
                PREÇO TOTAL
                <InputSmall name="item" type="text" placeholder="Diamond" />
              </div>
            </div>
          </Form>
        </Content>
      </Conteudo>
    </Container>
  );
}
