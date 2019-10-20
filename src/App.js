import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import Main from "./Components/Main";
import Checkloud from "./Components/Checkloud";
import SideBar from "./Components/SideBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  padding-right: 250px;
`;

const SideBarContainer = styled.div`
  align-self: flex-end;
  position: fixed;
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
`;


export default function() {
  const linkId = ["intro", "skills", "project", "contact"];

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <MainContainer>
          <Main linkId={linkId} />

          <Checkloud linkId={linkId} />
        </MainContainer>

        <SideBarContainer>
          <SideBar linkId={linkId} />
        </SideBarContainer>
      </Wrapper>
    </ThemeProvider>
  );
}