import React from "react";
import styled from "styled-components";

const imgUrl = require("../../assets/tools_image.jpg");

const Container = styled.div`
    margin-top: -140px;
    margin-left: 120px;
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${imgUrl});
    background-position:center center;
    background-repeat: no-repeat
    background-size: cover;
    cursor: pointer;
    box-shadow: 0 0 7px 2px rgba(0,0,0,0.3);
    color: #fff;

    transition-duration: 0.2s;

    ${props => props.isPicked && `
        margin: 0;
        width: 50vw;
        height: 70vh;
        z-index: 1;
        border-radius: 30px;
    `};
`;

const Wrapper = styled.div`
    height: 100%;
    background-color: rgba(255,255,255, 0.8);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 30px;

    font-size: 25px;
    font-weight: 700;
    color: #111;
`;

const Summary = styled.div`
    height: 200px;
    padding: 0 30px;
`;

const T1 = styled.p`
    font-size: 19px;
    font-weight: 600;
    color: #111;
`;

const Content = styled.div`
    width: 100%;
    flex: 1;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
`;

export default function({pick, setPick}) {
    return (
        <Container isPicked={pick==="Tools"} onClick={()=>{
            if(!pick) setPick("Tools");
            else setPick(null);
        }}>
        {pick === "Tools" ? (
            <Wrapper>
                <Title>Tools</Title>

                <Summary>
                    <T1>Git</T1>
                    <T1>프로젝트 버전 관리로 사용중이고 오픈소스 프로젝트에 pull requres를 보내고 협업을 위한 git 명령어를 자유롭게 사용할 수 있다.</T1>
                    <T1>Docker</T1>
                    <T1>도커의 작동방식을 이해하고 있으며 자유롭게 사용할 수 있다.</T1>
                </Summary>

                <Content />
            </Wrapper>
        ):(
            <h3>Tools</h3>
        )}
        </Container>
    );
}