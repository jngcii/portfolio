import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Introduction from "./Screens/Introduction";
import Skills from "./Screens/Skills";

const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 50px;
    font-family: 'Luckiest Guy', cursive;
    font-size: 50px;
    color: #333;
    background-color: #fafafa;
    transition: .5s;
    z-index: 1;

    ${props => props.s && `
        height: 50px;
        padding-left: 20px;
        font-size: 25px;
        color: #fafafa;
        background-color: #333;
    `};
`;

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
`;

const Link = styled.a`
    margin: 0 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    transition: .5s;
    text-decoration: none;

    ${props => props.s && `
        color: #fafafa;
    `};
`;


const Content = styled.div`
    padding-top: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
`;

export default function(){
    const [navState, setNavState] = useState("b");
  
    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        const scrollTop =
          (document.documentElement && document.documentElement.scrollTop) ||
          document.body.scrollTop;

        if(scrollTop < 100) setNavState("b");
        else if(scrollTop >= 100) setNavState("s");
      });
    },[])

    return (
        <Wrapper>
            <Title s={navState==="s"}>{navState==="b" && "This is web developer "} jngcii's Portfolio</Title>

            <Nav>
                <Link s={navState==="s"} href="#introduction">INTRODUCTION</Link>
                <Link s={navState==="s"} href="#skills">SKILLS</Link>
                <Link s={navState==="s"}>PROJECT</Link>
                <Link s={navState==="s"}>CONTACT</Link>
            </Nav>

            <Content>
                <Introduction />
                <Skills />
            </Content>
        </Wrapper>
    );
}