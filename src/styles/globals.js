import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    background-image:
      radial-gradient(ellipse at 15% 40%, rgba(99, 102, 241, 0.07) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 15%, rgba(34, 211, 238, 0.05) 0%, transparent 55%);
    background-attachment: fixed;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ::selection {
    background: rgba(99, 102, 241, 0.3);
    color: #f1f5f9;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #050816;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.4);
    border-radius: 3px;
  }
`;

export default GlobalStyles;
