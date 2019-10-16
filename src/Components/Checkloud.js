import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

const EntryContainer = styled.div`
    width: 60%;
    height: 60%;
    padding: 20px;
    display: flex;
`;

const LogoContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img.attrs({
    src: require("../assets/checkloud-logo.png")
})`
    height: 70px;
`;

const InfoContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const T1 = styled.p`
    font-size: 23px;
    font-weight: 600;
`;
const T2 = styled.p`
    font-size: 18px;
    font-weight: 400;
`;

export default function() {
    return (
        <Wrapper>
            <EntryContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <InfoContainer>
                    <T1>Checkloud</T1>
                    <T2>loremldshagoaisdfjlasidfhlasdifj</T2>
                </InfoContainer>
            </EntryContainer>
        </Wrapper>
    );
}