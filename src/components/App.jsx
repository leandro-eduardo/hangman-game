import { useState } from 'react';
import Game from './Game';
import Letters from './Letters';
import Guess from './Guess';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import alphabet from '../alphabet';
import words from '../words';

function App() {
   const [wordToBeDiscovered, setWordToBeDiscovered] = useState([]);
   const [gameWord, setGameWord] = useState([]);
   const [lettersUsed, setLettersUsed] = useState(alphabet);
   const [errors, setErrors] = useState(0);
   const [isGameOver, setIsGameOver] = useState(false);
   const [wordInput, setWordInput] = useState('');

   function startGame() {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex].split('');
      const underscoredWord = Array(randomWord.length).fill(' _ ');
      setWordToBeDiscovered(randomWord);
      setGameWord(underscoredWord);
      setErrors(0);
      setLettersUsed([]);
      setIsGameOver(false);
      setWordInput('');
      console.log(randomWord);
   }

   function swapSpecialCharacters(arrayWord) {
      let stringWord = '';
      arrayWord.forEach((letter) => {
         stringWord += letter;
      });
      return stringWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
   }

   function finishGame() {
      setLettersUsed(alphabet);
      setIsGameOver(true);
   }

   return (
      <Container>
         <GlobalStyle />
         <Game
            startGame={startGame}
            wordToBeDiscovered={wordToBeDiscovered}
            gameWord={gameWord}
            errors={errors}
            isGameOver={isGameOver}
         />
         <Letters
            lettersUsed={lettersUsed}
            setLettersUsed={setLettersUsed}
            wordToBeDiscovered={wordToBeDiscovered}
            gameWord={gameWord}
            setGameWord={setGameWord}
            errors={errors}
            setErrors={setErrors}
            swapSpecialCharacters={swapSpecialCharacters}
            finishGame={finishGame}
         />
         <Guess
            wordInput={wordInput}
            setWordInput={setWordInput}
            wordToBeDiscovered={wordToBeDiscovered}
            isGameOver={isGameOver}
            setErrors={setErrors}
            swapSpecialCharacters={swapSpecialCharacters}
            finishGame={finishGame}
         />
      </Container>
   );
}

const Container = styled.div`
   padding: 60px;
   display: flex;
   flex-direction: column;
   gap: 60px;
   max-width: 1100px;
   margin: 0 auto;
   @media (max-width: 850px) {
      padding: 20px;
      gap: 40px;
   }
`;

export default App;
