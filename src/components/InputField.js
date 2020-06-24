import React, { useState } from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const SudokuField = styled.input`
  /* background-color: ${colors.lightblue}; */
  background-color: transparent;
  text-align: center;
  font-size: 2rem;
  border: none;
  border: 1px solid ${colors.mediumblue};

  &:focus {
    /* border: 3px solid ${colors.darkblue} */
  }
`;

const Square = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-template-rows: repeat(3, 60px);
  border: 3px solid ${colors.darkblue};

  &:nth-child(odd) {
    background-color: ${colors.lightblue};
  }

  &:nth-child(even) {
    background-color: ${colors.lightblue};
    background-color: ${colors.white};

  }
`;

export const InputField = () => {
  var arrayWithInputs = Array.apply(null, Array(10));
  return (
    <Square>
      {arrayWithInputs.map((item, index) =>
        index !== 0 ? <SudokuField name={index} type="text" /> : ''
      )}
    </Square>
  )
}