import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --orange: #FF9500;
    --grey: #505050;
    --grey-50: #bdc1c6;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
  }

  button {
    cursor: pointer;
  }
`;