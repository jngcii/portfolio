import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 50px;
    padding-top: 50px;
    background-color: #efefef;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Container = styled.div`
    flex: 1;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 40px;
`;
const Img = styled.img.attrs({
    src: require("../../assets/profile.jpg")
})`
    width: 180px;
    height: 180px;
    border-radius: 90px;
`;
const Name = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 23px;
    font-weight: 600;
    color: #333;
    margin-top: 10px;
`;

const LinkContainer = styled.a`
    align-self: center;
    width:300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    text-decoration: none;
`;
const IconCotainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const GitIcon = styled.img.attrs({
    src: require("../../assets/github.png")
})`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;
const GmailIcon = styled.img.attrs({
    src: require("../../assets/gmail.png")
})`
    width: 40px;
    height: 40px;
`;
const DomainContainer = styled.div`
    width: 240px;
    font-size: 18px;
    font-weight: 500;
    color: #2091f5;
`;

const Footer = styled.div`
    height: 50px;
`;


export default function() {

    return (
        <Wrapper id="contact">
            <Header>
                <Title>Contact</Title>
            </Header>

            <Body>
                <Container>
                    <Img />
                    <Name>Jung Hyung Soo</Name>
                </Container>

                <LinkContainer href="https://github.com/jngcii" target="_blank">
                    <IconCotainer>
                        <GitIcon />
                    </IconCotainer>
                    <DomainContainer style={{cursor: "pointer"}}>https://github.com/jngcii</DomainContainer>
                </LinkContainer>

                <LinkContainer>
                    <IconCotainer>
                        <GmailIcon />
                    </IconCotainer>
                    <DomainContainer style={{cursor: "text"}}>concotree@gmail.com</DomainContainer>
                </LinkContainer>
            </Body>

            <Footer />
        </Wrapper>
    );
}