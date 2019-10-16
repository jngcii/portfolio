import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import Main from "./Components/Main";
import Checkloud from "./Components/Checkloud";
import AppBtn from "./Components/AppBtn";
import Profile from "./Components/Profile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  padding-right: 330px;
`;

const SideBar = styled.div`
  align-self: flex-end;
  position: fixed;
  height: 100vh;
  width: 250px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  padding: 36px;
  align-items: center;
  // border-left-color: #dfdfdf;
  // border-left-width: 2px;
  // border-left-style: solid;
`;

export default function() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <MainContainer>
          <Main />

          <Checkloud />
        </MainContainer>

        <SideBar>
          <h1>Top</h1>

          <AppBtn src={require("./assets/checkloud-icon.png")} />

          <AppBtn src={require("./assets/wink-icon.png")} />

          <Profile />
        </SideBar>
      </Wrapper>
    </ThemeProvider>
  );
}