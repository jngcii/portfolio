import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 10vh;
    margin-left: 20vw;
    potition: absolute;
    width: 220px;
    height: 220px;
    border-radius: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #38e095;
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
        <Container isPicked={pick==="DS"} onClick={()=>{
            if(!pick) setPick("DS");
            else setPick(null);
        }}>
            <h2>DataStructure</h2>
        </Container>
    );
}