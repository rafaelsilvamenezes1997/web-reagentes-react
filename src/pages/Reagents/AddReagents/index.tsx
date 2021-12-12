import React from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

import {
  Container,
  Span,
  FormGroup,
  Input,
  Button,
  ButtonFinish,
} from './styles';

const AddReagents: React.FC = ({ children }) => {
  return (
    <Container>
      <Span>
        <h2>Cadastrar Reagentes</h2>
      </Span>
      <FormGroup>
        <Input type="text" placeholder="Nome do Reagente" />
        <Input type="text" placeholder="Código" />
        <Button type="submit">
          <Span>Adicionar</Span>
        </Button>
      </FormGroup>
      <ButtonFinish>Finalizar Cadastro</ButtonFinish>
    </Container>
  );
};

export default AddReagents;
