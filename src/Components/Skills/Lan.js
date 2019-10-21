import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 15vh;
    margin-left: -3vh;
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e6d543;
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
        <Container isPicked={pick==="Lan"} onClick={()=>{
            if(!pick) setPick("Lan");
            else setPick(null);
        }}>
            <h2>Language</h2>
        </Container>
    );
}