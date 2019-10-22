import React from "react";
import styled from "styled-components";

const imgUrl = require("../../assets/algorithm_image.png");

const Container = styled.div`
    margin-top: 190px;
    margin-left: 470px;
    potition: absolute;
    width: 220px;
    height: 220px;
    border-radius: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${imgUrl});
    background-position:center center;
    background-repeat: no-repeat
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
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
        <Container isPicked={pick==="DS"} onClick={()=>{
            if(!pick) setPick("DS");
            else setPick(null);
        }}>
            {pick === "DS" ? (
                <Wrapper>
                    <Title>Data Structure & Algorithm</Title>

                    <Summary>
                        <T1>배열부터 리스트, 트리, 그래프까지 기본적인 자료 구조와 정렬알고리즘들, 각 정렬의 시간복잡도에 대해 알고있다.</T1>
                        <T1>또한, 순열, 그래프를 이용한 알고리즘들(bfs, dfs), 다이나믹 프로그래밍 등을 통한 문제해결 방식을 공부했고 중간난이도의 알고리즘 문제를 해결할 수 있다.</T1>
                    </Summary>

                    <Content />
                </Wrapper>
            ):(
                <h2>Data Structure</h2>
            )}
        </Container>
    );
}