'https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Lato, sans-serif;
    display: flex;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
