import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    align-items:center;
    justify-content:center;
`;
const Icon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: red;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.3);
`;

const NameWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusitfy-content: center;
`;

export default function({onClickBtn}) {
    return(
        <Wrapper>
            <IconWrapper>
                <Icon onClick={onClickBtn}/>
            </IconWrapper>

            <NameWrapper onClick={onClickBtn}>
                <h2>h2</h2>
            </NameWrapper>
        </Wrapper>
    )
    
}