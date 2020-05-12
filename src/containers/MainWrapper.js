import React from 'react';
import styled from 'styled-components';

import { SudokuBoard } from '../components/SudokuBoard';
import colors from '../styles/colors';

const Heading = styled.h1`
  color: ${colors.darkblue};
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
`;

export const MainWrapper = () => {
  return (
    <main>
      <Heading>solve a sudoku</Heading>
      <SudokuBoard />
    </main>
  )
}