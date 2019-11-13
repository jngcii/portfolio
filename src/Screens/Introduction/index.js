import React from "react";
import styled, {keyframes} from "styled-components";

const move = keyframes`
    from { margin-top: 25px; }
    to { margin-top: 50px; }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px auto;
    background-color: #fff;
    padding-bottom: 100px;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Img = styled.img.attrs({
    src: require("../../assets/intro.png")
})`
    position: relative;
    top: -100px;
    width: 75%;
    max-width: 800px;
`;

const Container = styled.div`
    position: relative;
    top: -97px;
    max-width: 850px;
    width: 70%;
    height: 150px;
    // border: 2px solid #111;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 50px;
    background-color: #f5f5f5;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

    @media only screen and (max-width: 512px) {
        width: 65%;
        border-radius: 20px;
        height: 100px;
    }
`;

const T1 = styled.div`
    align-self: flex-start;
    font-family: 'Prompt', sans-serif;
    font-size: 22px;
    font-weight: 900;
    color: #444;
    margin: 5px 0;
    line-height: 40px;

    @media only screen and (max-width: 512px) {
        font-size: 14px;
        line-height: 25px;
    }
`;

const Arrow = styled.img.attrs({
    src: require("../../assets/arrow_bottom.png")
})`
    width: 50px;

    animation: ${move} 1s linear infinite;
`;


export default function() {
    return(
        <Wrapper id="introduction">
            <ImgContainer>
                <Img />
            </ImgContainer>

            <Container>
                <T1>Welcome to my desk.</T1>
                <T1>I'm web developer Hyungsoo.</T1>
                <T1 style={{marginBottom: 40}}>Let me introduce myself.</T1>
                <Arrow style={{tintColor: "#ddd"}} />
            </Container>
        </Wrapper>
    );
}