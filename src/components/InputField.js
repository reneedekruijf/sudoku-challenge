import React from 'react';
import styled from 'styled-components';

import color from '../styles/colors';

const SudokuField = styled.input`
  background-color: ${color.lightblue};
`;

export const InputField = () => {
  return (
    <SudokuField type="text" />
  )
}