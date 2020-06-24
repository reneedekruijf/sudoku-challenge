import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
// import { isInaccessible } from '@testing-library/react';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(9, 66px);
  border: 3px solid ${colors.darkblue};
`;

const SudokuField = styled.input`
  background-color: ${colors.lightblue};
  text-align: center;
  font-size: 2rem;
  border: 1px solid ${colors.darkblue};
  width: 60px;
  height: 60px;

  &:focus {
    background-color: ${colors.white};
  }
`;

export const SudokuBoard = (props) => {
  const { userInput, arrayWithInputs, solution, solvedPressed } = props;

  return (
    <FormContainer action="" autoComplete="true" id="form">
      {!solvedPressed ? arrayWithInputs.map((item, index) =>
        <SudokuField name={index} type="text" key={index} onChange={userInput} maxLength={1} min={1} defaultValue={''} />
      ) : solution.flat().map((item, index) => <SudokuField name={index} type="text" key={index} defaultValue={item} />
      )}
    </FormContainer>
  )
}