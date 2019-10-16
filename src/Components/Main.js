import React from "react";
import styled from "styled-components";
import AppBtn from "./AppBtn";
import Profile from "./Profile";

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 7px 6px rgba(0,0,0,0.5);
    border: 1px solid #efefef;
    background-color: #fafafa;
    display: flex;
    flex-direction: row;
    align-items:center;
`;

const Column = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.div`
    width: 50%;
    height: 80px;
    display: flex;
    flex-direction: column;
    padding: 0 35px;
    justify-content: center;
    margin: 10px 0;
`;

export default function() {
    return (
        <Wrapper>
            <Column>
                <IconWrapper><AppBtn onClickBtn={()=>{alert("app number 1")}} /></IconWrapper>
                <IconWrapper><AppBtn onClickBtn={()=>{alert("app number 2")}} /></IconWrapper>
            </Column>

            <Column>
                <Profile />
            </Column>
        </Wrapper>
    );
}