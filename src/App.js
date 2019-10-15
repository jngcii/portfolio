import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
// import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

const FakeText = styled.h1`
  color: #777;
`;

export default function() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <FakeText>Yay</FakeText>
      </Wrapper>
    </ThemeProvider>
  );
}