import React from "react";
import styled from "styled-components";

// const Move = keyframes`
//     0% {
//         transform: translateX(90%)
//     }
//     100% {
//         transform: translateX(-130%)
//     }
// `;

const Wrapper = styled.div`
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Logo = styled.img.attrs({
    src: require("../../assets/wink-icon.png")
})`
    width: 80px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media only screen and (max-width: 1050px) {
        align-self: flex-start;
    }
`;

const AppName = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #333;
    margin-bottom: 10px;

    @media only screen and (max-width: 1050px) {
        align-self: flex-start;
    }
`;
const Description = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #777;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
    }
`;

// const Tech = styled.div`
//     margin-top: 140px;
//     margin-bottom: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     top: -60px;
//     position: relative;
// `;
// const TTitle = styled.div`
//     font-family: 'Prompt', sans-serif;
//     font-size: 20px;
//     font-weight: 800;
//     color: #333;
//     margin-bottom: 40px;

//     @media only screen and (max-width: 1050px) {
//         font-size: 15px;
//         align-self: flex-start;
//     }
// `;
// const TImg = styled.img.attrs({
//     src: require("../../assets/wink-tech.png")
// })`
//     width: 60%;

//     @media only screen and (min-width: 1050px) {
//         width: 90%;
//     }

//     @media only screen and (max-width: 1050px) {
//         width: 200%;
//         align-self: start;
//         animation: ${Move} 7s infinite linear;
//     }
// `;

// const LinkContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
// const Link = styled.a.attrs({
//     target: "_blank"
// })`
//     margin: 10px;
//     padding: 10px;
//     height: 40px;
//     width: 200px;
//     border-radius: 25px;
//     background-color: #efefef;
//     box-shadow: 0 0 3px rgba(0,0,0,0.3);
//     display: flex;
//     align-items: center;
//     text-decoration: none;
// `;
// const GitIcon = styled.img.attrs({
//     src: require("../../assets/github.png")
// })`
//     height:40px;
// `;
// const Git = styled.div`
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     font-family: 'Prompt', sans-serif;
//     font-size: 17px;
//     font-weight: 700;
//     color: #333;
// `;

export default function() {
    return (
        <Wrapper>
            <Logo />
            <AppName>Wink</AppName>
            <Description>My first API Project.</Description>
            <Description>Semi-annonymous video chatting application.</Description>
            <Description>If you wanna know who send the short video message, you have to send to him too!</Description>
        </Wrapper>
    );
}