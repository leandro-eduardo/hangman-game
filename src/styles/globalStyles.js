import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: 'Roboto', Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
