import Game from './Game';
import Letters from './Letters';
import GlobalStyle from '../styles/globalStyles';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
   const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
   ];

   const [wordToBeDiscovered, setWordToBeDiscovered] = useState();
   const [gameState, setGameState] = useState('initial');

   return (
      <Container>
         <GlobalStyle />
         <Game
            wordToBeDiscovered={wordToBeDiscovered}
            setWordToBeDiscovered={setWordToBeDiscovered}
            gameState={gameState}
            setGameState={setGameState}
            alphabet={alphabet}
         />
         <Letters gameState={gameState} alphabet={alphabet} />
      </Container>
   );
}

const Container = styled.div`
   padding: 60px;
   display: flex;
   flex-direction: column;
   gap: 60px;
`;

export default App;
