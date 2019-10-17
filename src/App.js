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
  padding-right: 250px;
`;

const SideBar = styled.div`
  align-self: flex-end;
  position: fixed;
  height: 100vh;
  width: 250px;
  background-color: #ccc;
`;

const SideRow = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopRow = styled(SideRow)`
  height: 15vh;
`;

const ProfileRow = styled(SideRow)`
  height: 35vh;
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
          <TopRow>
            <h1>Top</h1>
          </TopRow>
          
          <SideRow>
            <AppBtn src={require("./assets/checkloud-icon.png")} />
          </SideRow>

          <SideRow>
            <AppBtn src={require("./assets/wink-icon.png")} />
          </SideRow>

          <ProfileRow>
            <Profile />
          </ProfileRow>
        </SideBar>
      </Wrapper>
    </ThemeProvider>
  );
}