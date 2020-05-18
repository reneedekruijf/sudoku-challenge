import React from 'react';
import styled from 'styled-components';

import { SudokuBoard } from '../components/SudokuBoard';
import { Buttons } from '../components/Buttons';
import colors from '../styles/colors';

const Heading = styled.h1`
  color: ${colors.darkblue};
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
`;

export const MainWrapper = () => {
  return (
    <Main>
      <Heading>solve a sudoku</Heading>
      <SudokuBoard />
      <Buttons />
      {/* <button className="solved">Solve</button> */}
      {/* <button className="reset">Reset</button> */}
    </Main>
  )
}