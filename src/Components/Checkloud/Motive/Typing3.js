import React from "react";
import styled, {keyframes} from "styled-components";
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
`;

const Blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const T2 = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #000;
`;

const T3 = styled(T2)`
    animation: ${Blink} 1s 1s infinite linear alternate;
`;

export default function({cnt, setCnt}) {
    return (
        <Wrapper>
            <Typing speed={15} onFinishedTyping={()=>{}}>
                <T2>✔︎ buy Eggs</T2>
                <T2>✔︎ buy Milk</T2>
                <T2>✔︎ buy Shoes</T2>
                <T3>?</T3>
            </Typing>
        </Wrapper>
    )
}