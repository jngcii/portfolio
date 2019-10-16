import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const T1 = styled.p`
    font-size: 50px;
    font-weight: 500;
    margin: 15px;
`;
const T2 = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #555;
    margin: 5px;
`;

export default function() {
    return (
        <Wrapper>
            <T1>Portfolio</T1>

            <T2>of</T2>
            <T2>Web Developer</T2>
            <T2>Jung Hyung Soo</T2>
        </Wrapper>
    );
}