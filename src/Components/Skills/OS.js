import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: -10vh;
    margin-left: -10vw;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #4287f5;
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
        <Container isPicked={pick==="OS"} onClick={()=>{
            if(!pick) setPick("OS");
            else setPick(null);
        }}>
            <h2>Operating</h2>
            <h2>System</h2>
        </Container>
    );
}