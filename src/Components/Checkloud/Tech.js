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

export default function() {
    return (
        <Wrapper />
    );
}