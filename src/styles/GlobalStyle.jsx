import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* color */
    --color-blue-main: #588BE2;

    /* size */
    --size-max-width: 393px;
    --size-header: 46px;
    --size-navbar: 89px;
    --size-side-gap: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: min(100%, var(--size-max-width));
    margin: 0 auto;
    background-color: #ffffff;

    #root {
      height: 100vh;
      padding: calc(var(--size-header) + 1rem) var(--size-side-gap) calc(var(--size-navbar) + 1rem);
      position: relative;
    }

    button {
      cursor: pointer;
      font: inherit;
      color: inherit;
      border: 0;
    }
  }
`;

export default GlobalStyle;
