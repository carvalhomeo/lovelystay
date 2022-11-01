import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto';
    font-weight: 400;
    color: white;
    background-color: #1f182e;
  }

  button {
    cursor: pointer;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  button {
    font-weight: 700;
  }
`;
