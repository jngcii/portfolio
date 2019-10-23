import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;
    padding-top: 150px;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Title = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Prompt', sans-serif;
    font-size: 30px;
    font-weight: 900;
    color: #333;
`;

const Body = styled.div`
    height: 360px;
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Container = styled.div`
    position: relative;
    width: 400px;
    height: 300px;
    border-radius: 30px;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.3);
    margin: 0 20px;
`;

const AppLogo = styled.img`
    width: 70px;
    position: absolute;
    left: 10px;
    top: 10px;
`;



export default function() {

    return (
        <Wrapper id="project">
            <Header>
                <Title>Project</Title>
            </Header>

            <Body>
                <Container style={{backgroundColor:"#333"}}>
                    <AppLogo src={require("../../assets/checkloud-logo.png")} />
                </Container>

                <Container style={{backgroundColor:"#efefef"}}>
                    <AppLogo src={require("../../assets/wink-icon.png")} style={{width:60}} />
                </Container>
            </Body>
        </Wrapper>
    );
}