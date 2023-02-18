import Game from './Game';
import Letters from './Letters';
import GlobalStyle from '../styles/globalStyles';
import styled from 'styled-components';
import { useState } from 'react';
import alphabet from '../alphabet';

function App() {
   const [wordToBeDiscovered, setWordToBeDiscovered] = useState([]);
   const [userWord, setUserWord] = useState([]);
   const [lettersUsed, setLettersUsed] = useState(alphabet);
   const [errors, setErrors] = useState(0);

   return (
      <Container>
         <GlobalStyle />
         <Game
            setWordToBeDiscovered={setWordToBeDiscovered}
            userWord={userWord}
            setUserWord={setUserWord}
            errors={errors}
            setErrors={setErrors}
            setLettersUsed={setLettersUsed}
         />
         <Letters
            lettersUsed={lettersUsed}
            setLettersUsed={setLettersUsed}
            wordToBeDiscovered={wordToBeDiscovered}
            userWord={userWord}
            setUserWord={setUserWord}
            errors={errors}
            setErrors={setErrors}
         />
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
