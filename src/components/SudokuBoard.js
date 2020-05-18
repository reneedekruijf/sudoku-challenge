import React from 'react';
import styled from 'styled-components';

import { InputField } from './InputField';
import colors from '../styles/colors';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 185px);
  margin: 0 4rem;
  align-self: center;
`;


export const SudokuBoard = () => {
  return (
    <FormContainer action="" autoComplete="true">
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
    </FormContainer>
  )
}