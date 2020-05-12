import React from 'react';
import styled from 'styled-components';

import { InputField } from './InputField';
import colors from '../styles/colors';

const FormContainer = styled.form`
  border: 3px solid ${colors.darkblue};
`;

export const SudokuBoard = () => {
  return (
    <FormContainer action="">
      <InputField />
    </FormContainer>
  )
}