import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;
    padding-top: 150px;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Title = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Prompt', sans-serif;
    font-size: 30px;
    font-weight: 900;
    color: #333;
`;

const Selector = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
`;
const SelectColumn = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #333;
`;

const Body = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 10px 30px;
    display: flex;
`;


export default function() {

    return (
        <Wrapper id="project">
            <Header>
                <Title>Project</Title>
            </Header>

            <Selector>
                <SelectColumn style={{borderBottomColor:"#e3d839", borderBottomWidth: 3, borderBottomStyle:"solid", fontWeight:"900"}}>
                    Checkloud
                </SelectColumn>
                <SelectColumn style={{color:"#ccc"}}>
                    Wink
                </SelectColumn>
            </Selector>

            <Body />
        </Wrapper>
    );
}