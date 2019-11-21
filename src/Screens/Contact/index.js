import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 35px;
    padding-top: 20px;
    background-color: #efefef;
`;

const Body = styled.div`
    width: 900px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    
    @media only screen and (max-width: 1050px) {
        flex-direction: column;
    }
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
    
    @media only screen and (max-width: 1050px) {
        width: 30px;
        height: 30px;
    }
`;
const GmailIcon = styled.img.attrs({
    src: require("../../assets/gmail.png")
})`
    width: 40px;
    height: 40px;
    cursor: pointer;
    
    @media only screen and (max-width: 1050px) {
        width: 30px;
        height: 30px;
    }
`;
const DomainContainer = styled.div`
    width: 240px;
    font-size: 18px;
    font-weight: 500;
    color: #2091f5;
    
    @media only screen and (max-width: 1050px) {
        font-size: 16px;
    }
`;
export default function() {

    return (
        <Wrapper id="contact">
            <Body>
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
        </Wrapper>
    );
}