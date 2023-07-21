import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #2b333a;
    --color-bright-blue: #4364fa;
    --color-bright-purple: #6542d1;
    --color-grey-20: #a1b1ba;
    --color-grey-30: #ccdae0;
    --color-grey-40: #e5ebee;
    --color-grey-50: #f2f5f7;
    --color-grey-60: #f9fafb;
    --color-white: #ffffff;

    --font-primary: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  a {
    color: unset;
    cursor: pointer;
    outline: unset;
    text-decoration: unset;

    &[aria-disabled="true"] {
      cursor: unset;
    }
  }

  body {
    color: ${({ theme }) => theme.colors.text.main};
    font-family: ${({ theme }) => theme.font.families.primary};
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    appearance: unset;
    background-color: unset;
    border: unset;
    color: unset;
    font: unset;
    margin: unset;
    outline: unset;
    padding: unset;

    :disabled {
      cursor: unset;
    }
  }
`

export default GlobalStyle
