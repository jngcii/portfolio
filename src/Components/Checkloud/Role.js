import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    flex-direction: row;
    margin-top: 50px;
`;
const TitleContainer = styled.div`
    height: 60px;
    width: 200px;
    display: flex;
    align-items: center;
`;
const Title = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    vertical-align: center;
    padding: 0 100px;
`;

const Content = styled.span`
    flex: 1;
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #555;
`;

export default function() {
    return (
        <Wrapper>
            <TitleContainer>
                <Title>Role</Title>
            </TitleContainer>

            <Content>기획 &nbsp;&nbsp;&nbsp; 인프라스트럭쳐 구상 &nbsp;&nbsp;&nbsp; 백엔드 로직작성 &nbsp;&nbsp;&nbsp; 프론트엔드 로직작성 &nbsp;&nbsp;&nbsp; 웹디자인</Content>
        </Wrapper>
    );
}