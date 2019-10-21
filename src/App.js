import React, {useState, useEffect} from 'react';
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Checkloud from "./Components/Checkloud";
import Contact from "./Components/Contact";
import SideBar from "./Components/SideBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  margin-right: 250px;
  display: flex;
  flex-direction: column;
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

  const [now, setNow] = useState("Intro");
  const [mot, setMot] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      const {innerHeight} = window;
      const {scrollHeight} = document.body;
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

      if(scrollTop < innerHeight/2) setNow("Intro");
      else if(scrollTop >= innerHeight/2 && scrollTop < innerHeight/2 + innerHeight) setNow("Skills");
      else if(scrollTop >= innerHeight/2 + innerHeight && scrollTop < scrollHeight - innerHeight - innerHeight/2) setNow("Project");
      else setNow("Contact");

      if(scrollTop > 1500) setMot(true);

      console.log(scrollTop);
    });
  },[])

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <MainContainer>
          <Main linkId={linkId} />

          <Skills linkId={linkId} />

          <Checkloud linkId={linkId} mot={mot} />

          <Contact linkId={linkId} />
        </MainContainer>

        <SideBarContainer>
          <SideBar now={now} setNow={setNow} />
        </SideBarContainer>
      </Wrapper>
    </ThemeProvider>
  );
}