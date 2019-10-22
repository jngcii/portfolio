import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

const Header = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: #333;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
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
    font-size: 23px;
    font-weight: 600;
    color: #333;
    margin-top: 10px;
`;

const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
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
`;
const GmailIcon = styled.img.attrs({
    src: require("../../assets/gmail.png")
})`
    width: 40px;
    height: 40px;
`;
const DomainContainer = styled.div`
    width: 240px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #2091f5;
`;

const Footer = styled.div`
    height: 50px;
`;

export default function({linkId}) {
    return (
        <Wrapper id={linkId[3]}>
            <Header>
                <Title>Contact</Title>
            </Header>

            <Body>
                <Container>
                    <Img />
                    <Name>Jung Hyung Soo</Name>
                </Container>

                <LinkContainer>
                    <IconCotainer>
                        <GitIcon />
                    </IconCotainer>
                    <DomainContainer>https://github.com/jngcii</DomainContainer>
                </LinkContainer>

                <LinkContainer>
                    <IconCotainer>
                        <GmailIcon />
                    </IconCotainer>
                    <DomainContainer>concotree@gmail.com</DomainContainer>
                </LinkContainer>
            </Body>

            <Footer />
        </Wrapper>
    )
}