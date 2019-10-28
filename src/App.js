import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Introduction from "./Screens/Introduction";
import Skills from "./Screens/Skills";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";

const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const Avatar = styled.img.attrs({
    src: require("./assets/avatar.png")
})`
    position: fixed;
    width: 30vw;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
    transition: .5s linear;
    right:0;
    bottom: 0;

    @media only screen and (max-width: 512px) {
        width: 50vw;
    }

    ${props => props.s && `
        right: -30vw;
        bottom: -30vw;

        @media only screen and (max-width: 512px) {
            right: -50vw;
            bottom: -50vw;
        }
    `};
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

    @media only screen and (max-width: 1050px) {
        font-size: 25px;
    }

    ${props => props.s && `
        height: 50px;
        padding-left: 20px;
        font-size: 25px;
        color: #fafafa;
        background-color: #333;

        @media only screen and (max-width: 1050px) {
            font-size: 18px;
        }

        @media only screen and (max-width: 512px) {
            height: 60px;
            justify-content: center;
            align-items: flex-start;
            padding: 0;
            padding-top: 10px;
        }
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

    @media only screen and (max-width: 512px) {
        justify-content: center;
    }

    ${props => props.s && `
        @media only screen and (max-width: 512px) {
            top: 30px;
            justify-content: center;
        }
    `};
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

    @media only screen and (max-width: 1050px) {
        font-size: 12px;
        font-weight: 700;
        color: #999;
        margin: 0 7px;
    }
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
            <Avatar s={navState==="s"} />
            

            <Title s={navState==="s"}>{navState==="b" && "This is web developer "} jngcii's Portfolio</Title>

            <Nav s={navState==="s"}>
                <Link s={navState==="s"} href="#introduction">INTRODUCTION</Link>
                <Link s={navState==="s"} href="#skills">SKILLS</Link>
                <Link s={navState==="s"} href="#project">PROJECT</Link>
                <Link s={navState==="s"} href="#contact">CONTACT</Link>
            </Nav>

            <Content>
                <Introduction />
                <Skills />
                <Project />
                <Contact />
            </Content>
        </Wrapper>
    );
}