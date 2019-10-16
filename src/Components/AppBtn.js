import React from "react";
import styled from "styled-components";

const CCIcon = styled.img`
    width: 92px;
    height: 92px;
    margin: 30px auto;
`;

export default function({src, onClickBtn}) {
    return <CCIcon src={src} onClick={()=>{}}/>;
}