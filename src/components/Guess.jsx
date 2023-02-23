import styled from 'styled-components';

export default function Guess(props) {
   const {
      wordInput,
      setWordInput,
      wordToBeDiscovered,
      isGameOver,
      setErrors,
      swapSpecialCharacters,
      finishGame,
   } = props;

   function guessWord() {
      if (swapSpecialCharacters(wordInput.split('')) !== swapSpecialCharacters(wordToBeDiscovered))
         setErrors(6);
      finishGame();
   }

   return (
      <Container>
         <Span>Já sei a palavra!</Span>
         <Input
            disabled={wordToBeDiscovered.length === 0 || isGameOver ? true : false}
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
         />
         <Button disabled={wordToBeDiscovered.length === 0 || isGameOver ? true : false} onClick={guessWord}>
            Chutar
         </Button>
      </Container>
   );
}

const Container = styled.div`
   display: flex;
   align-self: center;
   gap: 15px;
   align-items: center;
`;

const Span = styled.span`
   font-size: 20px;
`;

const Input = styled.input`
   width: 350px;
   height: 40px;
   border-radius: 3px;
   border: 1px solid #cccccc;
   box-shadow: 2px 2px 5px 0px #00000040;
   outline: none;
   padding: 10px;
   font-size: 18px;
`;

const Button = styled.button`
   width: 100px;
   height: 40px;
   border-radius: 3px;
   border: 1px solid #7aa7c7;
   color: ${(props) => (props.disabled ? '#798A9F' : '#39739d')};
   background-color: ${(props) => (props.disabled ? '#9FAAB5' : '#e1ecf4;')};
   font-weight: 700;
   font-size: 16px;
   cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
`;
