import React, { useState } from 'react';
import styled from 'styled-components';

import { SudokuBoard } from '../components/SudokuBoard';
// import { Buttons } from '../components/Buttons';
import { BigButtons } from '../components/BigButtons';
import { Poppup } from '../components/Poppup';

import colors from '../styles/colors';

const Heading = styled.h1`
  color: ${colors.darkblue};
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 200px 1fr 100px;
  justify-content: center;
`;


export const MainWrapper = (props) => {
  const arrayWithInputs = Array.apply(null, Array(81)).fill(0, 0);

  const [values, setValues] = useState({ ...arrayWithInputs });
  const [solvedKey, setSolvedKey] = useState(false);
  const [solution, setSolution] = useState([]);
  const [modal, setModal] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const handleValues = (e) => {
    e.persist();
    if (parseInt(e.target.value) === 0) {
      setModal(true);
      e.target.value = '';
    } else if (!isNaN(e.target.value)) {
      setValues(values => ({ ...values, [e.target.name]: parseInt(e.target.value) }));
    }
  }

  const valuesToArray = Object.values(values);
  const userInput = [[...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)], [...valuesToArray.splice(0, 9)]];

  const possible = (board, y, x, n) => {
    for (let i = 0; i <= 8; i++) {
      if (board[y][i] === n || board[i][x] === n) {
        return false;
      }
    }
    let xSquare = Math.floor(x / 3) * 3;
    let ySquare = Math.floor(y / 3) * 3;
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (board[ySquare + i][xSquare + j] === n) {
          return false;
        }
      }
    }
    return true;
  }

  const solve = (board) => {
    setSolvedKey(true);
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        if (board[y][x] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (possible(board, y, x, n)) {
              board[y][x] = n;
              if (solve(board)) return board;
            }
          }
          board[y][x] = 0;
          return false;
        }
      }
      setSolution(board);
    }
    return board;
  }

  const reset = () => {
    if (!resetButton) {
      setValues({ ...arrayWithInputs })
      setSolvedKey(false);
      setSolution([]);
      setResetButton(true);
    }
    if (resetButton) {
      document.getElementById('form').reset();
      setResetButton(false);
    }
  }

  const handleModal = () => {
    !modal ? setModal(true) : setModal(false);
  }

  return (
    <Main>
      <Heading>solve a sudoku</Heading>
      {modal ? <Poppup closeModal={handleModal} /> : ''}
      <SudokuBoard userInput={handleValues} arrayWithInputs={arrayWithInputs} solution={solution} solvedPressed={solvedKey} />
      {/* <Buttons /> */}
      <BigButtons solve={() => solve(userInput)} reset={reset} />
    </Main>
  )
}