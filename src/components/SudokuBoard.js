import React from 'react';
import styled from 'styled-components';

import { InputField } from './InputField';
import colors from '../styles/colors';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 185px);
  margin: 0 4rem;
  align-self: center;

  button {
    margin-top: 2rem;
    text-transform: uppercase;
    padding: 0.7rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};
    border: 2px solid ${colors.darkblue};
    cursor: pointer;
  }

  .solved {
    background-color: ${colors.green};

    &:hover {
      background-color: ${colors.white};
      color: ${colors.darkblue};
      border: 2px solid ${colors.green}
    }
  }

  .reset {
    background-color: ${colors.red};
    grid-column-start: 3;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.darkblue};
      border: 2px solid ${colors.red}
    }
  }
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