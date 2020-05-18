import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const ButtonWrapper = styled.div`
    margin: 1rem 0;
    text-align: center;

    button {
      width: 60px;
      height: 60px;
      border: 2px solid ${colors.darkblue};
      color: ${colors.white};
      font-size: 2rem;
      background-color: ${colors.green};
      margin-right: 2px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.green};
      }
    }
    
`;


export const Buttons = () => {
  return (
    <ButtonWrapper>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </ButtonWrapper>
  )
}