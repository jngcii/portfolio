import React from 'react';
import styled, { ThemeProvider } from "styled-components";
// import { HashRouter as Router } from "react-router-dom";
// import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import Main from "./Components/Main"

const Wrapper = styled.div`
  margin: 50px auto;
  max-width: ${props => props.theme.maxWidth};
  width: 90%;
  min-height: ${props => props.theme.minHeight};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <Main />
      </Wrapper>
    </ThemeProvider>
  );
}