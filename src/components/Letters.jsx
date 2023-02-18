import React from 'react';
import styled from 'styled-components';

export default function Letters(props) {
   const { alphabet, gameState } = props;
   return (
      <Container>
         {alphabet.map((letter, index) => (
            <Letter key={index} gameState={gameState}>
               {letter.toUpperCase()}
            </Letter>
         ))}
      </Container>
   );
}

const Container = styled.div`
   width: 690px;
   display: flex;
   align-self: center;
   flex-wrap: wrap;
   gap: 12px;
`;

const Letter = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   font-weight: 700;
   font-size: 16px;
   color: ${(props) => (props.gameState === 'initial' ? '#798A9F' : '#39739d')};
   background-color: ${(props) => (props.gameState === 'initial' ? '#9FAAB5' : '#e1ecf4;')};
   border-radius: 3px;
   border: 1px solid #7aa7c7;
   cursor: pointer;
`;
