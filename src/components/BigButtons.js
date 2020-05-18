import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const ButtonWrapper = styled.div`
  display: grid;
  /* grid-template-columns: auto auto auto auto auto; */

  button {
      margin-top: 2rem;
      text-transform: uppercase;
      padding: 0.7rem;
      font-size: 2rem;
      font-weight: 700;
      color: ${colors.white};
      border: 2px solid ${colors.darkblue};
      cursor: pointer;
      justify-self: center;
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


export const BigButtons = () => {
  return (
    <ButtonWrapper>
      <button className="solved">Solve</button>
      <button className="reset">Reset</button>
    </ButtonWrapper>
  )
}