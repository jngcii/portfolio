import React from "react";
import styled from "styled-components";
import Typing from 'react-typing-animation';

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

const T2 = styled(T1)`
    color: #000;
`;

const Rest = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export default function() {
    return (
        <Wrapper>
            <Header>
                <T1>Motive</T1>
            </Header>

            <Rest>
                <Typing>
                    <T2>abcdefg</T2>
                    <T2>adsfa</T2>
                    <T2>ghlisadjf</T2>
                </Typing>
            </Rest>
        </Wrapper>
    )
}