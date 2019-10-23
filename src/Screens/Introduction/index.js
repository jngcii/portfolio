import React from "react";
import styled, {keyframes} from "styled-components";

const move = keyframes`
    from { margin-top: 30px; }
    to { margin-top: 60px; }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px auto;
    background-color: #fff;
    padding-bottom: 200px;
`;

const Bg = styled.img.attrs({
    src: require("../../assets/main.jpg")
})`
    width: 100%;
`;

const Container = styled.div`
    margin: 40px auto;
    width: 320px;
    height: 250px;
    border-radius: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    background-color: rgba(255, 239, 66, 0.2);
    box-shadow: 0 0 20px 10px rgba(255, 239, 66, 0.2);
`;

const T1 = styled.div`
    align-self: flex-start;
    font-family: 'Prompt', sans-serif;
    font-size: 22px;
    font-weight: 900;
    color: #444;
    margin: 5px 0;
    line-height: 40px;
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
            <Bg />
            <Container>
                <T1>Welcome to my desk.</T1>
                <T1>I'm web developer Hyungsoo.</T1>
                <T1>Let me introduce myself.</T1>
                <Arrow style={{tintColor: "#ddd"}} />
            </Container>
        </Wrapper>
    );
}