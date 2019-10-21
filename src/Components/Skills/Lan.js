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
                    <T1>현대 컴퓨터 시스템에서 사용자 프로그램이 동장할 때 운영체제의 역할과 기본적인 인터럽트, 트랩 등의 개념, 멀티스레딩 프로그래밍, 스레드풀과 멀티코어환경에서 데드락의 원인까지 기초적인 지식을 숙지하고 있다.</T1>
                    <T1>운영체제의 메모리관리 기법 등 현대 컴퓨터 프로그램의 작동 방식과 운영체제의 역할, 효율성을 위한 여러 프로그래밍 기법과 그 속에서 발생 가능한 문제들에 대해 알고 있다.</T1>
                </Summary>

                <Content />
            </Wrapper>
        ):(
            <h3>Language</h3>
        )}
        </Container>
    );
}