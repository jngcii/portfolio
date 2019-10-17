import React from "react";
import styled from "styled-components";
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
`;

const T2 = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #000;
`;

export default function({cnt, setCnt}) {
    return (
        <Wrapper>
            <Typing speed={15} onFinishedTyping={()=>{setTimeout(()=>setCnt(cnt+1), 500)}}>
                <T2>✔︎ do Homework</T2>
                <T2>✔︎ meet Client</T2>
                <T2>✔︎ buy Groceries</T2>
                <T2>✔︎ go to Exercise</T2>
            </Typing>
        </Wrapper>
    )
}