import styled from 'styled-components';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import words from '../words';

export default function Game(props) {
   const {
      wordToBeDiscovered,
      setWordToBeDiscovered,
      gameWord,
      setGameWord,
      errors,
      setErrors,
      setLettersUsed,
      isGameOver,
      setIsGameOver,
      setWordInput,
   } = props;

   const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

   function chooseWord() {
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

   return (
      <Container>
         <Image src={images[errors]} alt={`Forca ${errors}`} />
         <ChooseWordButton onClick={chooseWord}>Escolher Palavra</ChooseWordButton>
         <Word isGameOver={isGameOver} errors={errors} gameWord={gameWord}>
            {isGameOver ? wordToBeDiscovered : gameWord}
         </Word>
      </Container>
   );
}

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   position: relative;
`;

const Image = styled.img`
   width: 400px;
   height: 450px;
`;

const ChooseWordButton = styled.button`
   margin-top: 25px;
   width: 200px;
   height: 60px;
   background-color: #27ae60;
   border-radius: 8px;
   border: none;
   color: #ffffff;
   font-size: 20px;
   font-weight: 700;
   cursor: pointer;
`;

const Word = styled.div`
   position: absolute;
   right: 10px;
   bottom: 10px;
   font-size: 50px;
   font-weight: 700;
   font-family: 'Noto Sans', Helvetica, Sans-Serif;
   color: ${(props) => (props.isGameOver ? (props.errors === 6 ? '#FF0000' : '#27AE60') : '#000000')};
`;
