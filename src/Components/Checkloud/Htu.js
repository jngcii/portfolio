import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    align-items: center;
`;

const T1 = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #fff;
`;

const Rest = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Ss = styled.img.attrs({
    src: require("../../assets/ss.png")
})`
    height: 40vh;
`;

export default function() {
    return (
        <Wrapper />
    );
}