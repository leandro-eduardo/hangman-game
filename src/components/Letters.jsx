import styled from 'styled-components';
import alphabet from '../alphabet';

export default function Letters(props) {
   const {
      lettersUsed,
      setLettersUsed,
      wordToBeDiscovered,
      gameWord,
      setGameWord,
      errors,
      setErrors,
      swapSpecialCharacters,
      finishGame,
   } = props;

   function clickLetter(clickedLetter) {
      setLettersUsed([...lettersUsed, clickedLetter]);
      if (swapSpecialCharacters(wordToBeDiscovered).includes(clickedLetter)) {
         correctLetter(clickedLetter);
      } else {
         wrongLetter();
      }
   }

   function correctLetter(clickedLetter) {
      const newGameWord = [...gameWord];
      wordToBeDiscovered.forEach((letter, index) => {
         if (swapSpecialCharacters(wordToBeDiscovered)[index] === clickedLetter) {
            newGameWord[index] = letter; // or clickedLetter
         }
      });
      setGameWord(newGameWord);
      if (!newGameWord.includes(' _ ')) finishGame();
   }

   function wrongLetter() {
      const newErrors = errors + 1;
      setErrors(newErrors);
      if (newErrors === 6) finishGame();
   }

   return (
      <Container>
         {alphabet.map((letter, index) => (
            <Letter key={index} disabled={lettersUsed.includes(letter)} onClick={() => clickLetter(letter)}>
               {letter.toUpperCase()}
            </Letter>
         ))}
      </Container>
   );
}

const Container = styled.div`
   width: 664px;
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
   color: ${(props) => (props.disabled ? '#798A9F' : '#39739d')};
   background-color: ${(props) => (props.disabled ? '#9FAAB5' : '#e1ecf4;')};
   border-radius: 3px;
   border: 1px solid #7aa7c7;
   cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
`;
