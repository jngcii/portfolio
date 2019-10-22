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
    flex-direction: column;
    overflow: hidden;
    
    font-size: 19px;
    font-weight: 700;
    color: #000;
`;

const Slider = styled.div`
    width: 400px;
    position: absolute;
    display: flex;

    transition-duration: 0.2s;
    transition-timing-function: linear;

    ${props => props.now ? css`
        left: 0px;
    ` : css`
        left: -199px;
    `};
`;
const Left = styled.div`
    flex: 1;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;
const Right = styled.div`
    flex:1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
`;

const T1 = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #fafafa;
    margin: 5px;
    z-index: 0;
`;
const T2 = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #fafafa;
    margin-left:10px;
    margin-bottom: 2px;
    margin-top: 2px;
    z-index: 0;
`;

export default function({now, setNow}) {

    return (
        <Wrapper>
            <Box style={{height:"14.5vh"}} onMouseOver={()=>setNow("Intro")}>
                <a href={"#intro"}>
                    <Slider style={{height:"14.5vh"}} now={now==="Intro"}>
                        <Left />
                        <Right>
                             <p>Home</p>
                        </Right>
                    </Slider>
                </a>
                <T1>Welcome</T1>
                <T1>This is my portfolio</T1>
            </Box>

            <Box style={{height:"29.5vh"}} onMouseOver={()=>setNow("Skills")}>
                <a href={"#skills"}>
                    <Slider style={{height:"29.5vh"}} now={now==="Skills"}>
                        <Left />
                        <Right>
                             <p>Skills</p>
                        </Right>
                    </Slider>
                </a>
                <T1>Operation System</T1>
                <T1>Network</T1>
                <T1>Data Structure</T1>
                <T1>Language</T1>
                <T1>Tools</T1>
            </Box>

            
            <Box style={{height:"29.5vh"}} onMouseOver={()=>setNow("Project")}>
                <a href={"#project"}>
                    <Slider style={{height:"29.5vh"}} now={now==="Project"}>
                        <Left />
                        <Right>
                             <p>Project</p>
                        </Right>
                    </Slider>
                </a>
                <T1>Checkloud</T1>
                <T2>Motivation</T2>
                <T2>Usage</T2>
                <T2>Tech Stack</T2>
            </Box>

            <Box style={{height:"24.5vh"}} onMouseOver={()=>setNow("Contact")}>
                <a href={"#contact"}>
                    <Slider style={{height:"24.5vh"}} now={now==="Contact"}>
                        <Left />
                        <Right>
                             <p>Contact</p>
                        </Right>
                    </Slider>
                </a>
                <T1>Jung Hyung Soo</T1>
                <T2>https://github.com/jngcii</T2>
                <T2>concotree@gmail.com</T2>
            </Box>
        </Wrapper>
    )
}