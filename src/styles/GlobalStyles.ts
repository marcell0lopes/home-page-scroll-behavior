import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, input, textarea, button {
  font-family: 'Roboto', sans-serif;
}

html{
  font-size: 16px;

  @media(max-width: 100px){
    font-size: 90%;
  }

  @media(max-width: 600px){
    font-size: 80%;
  }
}
`;
