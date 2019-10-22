import React from "react";
import styled from "styled-components";

const imgUrl = require("../../assets/language_image.jpg");

const Container = styled.div`
    margin-top: 90px;
    margin-left: -200px;
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 70px;
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
        <Container isPicked={pick==="Lan"} onClick={()=>{
            if(!pick) setPick("Lan");
            else setPick(null);
        }}>
        {pick === "Lan" ? (
            <Wrapper>
                <Title>Language</Title>

                <Summary>
                    <T1>주 언어는 Javascriptㅇ다. javascript가 서버/클라이언트 환경에서 엔진에 따라 어떻게 동작하는지에 대해 알고 java, python 등 class기반 객체지향 언어와 어떻게 다르고 javascript는 어떻게 디자인해야하는지, ES6 이후의 기능들에 대해 정확히 설명할수 있다.</T1>
                    <T1>또한, Javascript를 이용해 서버와 클라이언트를 자유롭게 구현하고 디버깅할수 있다.</T1>
                </Summary>

                <Content />
            </Wrapper>
        ):(
            <h3>Language</h3>
        )}
        </Container>
    );
}