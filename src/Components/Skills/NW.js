import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: -28vh;
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #b338e0;
    cursor: pointer;

    transition-duration: 0.2s;

    ${props => props.isPicked && `
        margin: 0;
        width:80vw;
        height: 80vh;
        z-index: 1;
    `};
`;

export default function({pick, setPick}) {
    return (
        <Container isPicked={pick==="NW"} onClick={()=>{
            if(!pick) setPick("NW");
            else setPick(null);
        }}>
            <h2>Network</h2>
        </Container>
    );
}