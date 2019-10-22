import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const EntryContainer = styled.div`
    width: 60%;
    height: 60%;
    padding: 20px;
    display: flex;
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
`;

const Logo = styled.img.attrs({
    src: require("../../assets/checkloud-logo.png")
})`
    height: 70px;
`;

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
`;

const T1 = styled.p`
    font-size: 23px;
    font-weight: 600;
`;
const T2 = styled.p`
    font-size: 18px;
    font-weight: 400;
`;

export default function({linkId}) {
    return (
        <Wrapper id={linkId[2]} />
    );
}