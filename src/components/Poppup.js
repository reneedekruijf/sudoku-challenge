import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const Modal = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: 80% 1fr;
  padding: 1rem;
  height: 590px;
  width: 590px;
  border: 2px solid ${colors.blakc};
  background-color: ${colors.lightblue};

  font-size: 3rem;
  padding: 2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    width: 70%;
    justify-self: center;
    text-align: center;
  }

  button {
    width: 50%;
    height: 50%;
    text-transform: uppercase;
      padding: 0.7rem;
      font-size: 2rem;
      font-weight: 700;
      color: ${colors.white};
      border: 2px solid ${colors.darkblue};
      cursor: pointer;
      justify-self: center;
      background-color: ${colors.red};

      &:hover {
        background-color: ${colors.white};
        color: ${colors.darkblue};
        border: 2px solid ${colors.red}
      }

      &:active {
        transform: translateY(2px);
      }
  }
`;


export const Poppup = (props) => {
  const { closeModal } = props;
  return (
    <Modal>
      <p>Only numbers between 1 and 9 are allowed!</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  )
}