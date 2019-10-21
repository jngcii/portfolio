import React from "react";
import styled, {css}  from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 24.5%;
    display: flex;
    overflow: hidden;
    
    font-size: 19px;
    font-weight: 700;
    color: #000;
`;

const Slider = styled.div`
    width: 100%;
    height: 24.5vh;
    position: absolute;
    background-color: rgba(0,0,0,0.6);

    transition-duration: 0.2s;
    transition-timing-function: linear;

    ${props => props.now ? css`
        right: 0;
    ` : css`
        right: 250px;
    `};
`;

const T1 = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #fafafa;
    margin: 5px;
    z-index: 0;
`;

export default function({now, setNow}) {

    return (
        <Wrapper>
            <Box onMouseOver={()=>setNow("Intro")}>
                <a href={"#intro"}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Intro"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>Welcome</p>
            </Box>

            <Box onMouseOver={()=>setNow("Skills")}>
                <a href={"#skills"}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Skills"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>I know</p>
                <T1>Javascript</T1>
                <T1>Python</T1>
            </Box>

            
            <Box onMouseOver={()=>setNow("Project")}>
                <a href={"#project"}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Project"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>I made</p>
            </Box>

            <Box onMouseOver={()=>setNow("Contact")}>
                <a href={"#contact"}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Contact"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>My contact</p>
            </Box>
        </Wrapper>
    )
}