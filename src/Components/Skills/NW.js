import React from "react";
import styled from "styled-components";

const imgUrl = require("../../assets/network_image.jpg");

const Container = styled.div`
    margin-top: 40px;
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 90px;
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
        <Container isPicked={pick==="NW"} onClick={()=>{
            if(!pick) setPick("NW");
            else setPick(null);
        }}>
        {pick === "NW" ? (
            <Wrapper>
                <Title>Network</Title>

                <Summary>
                    <T1>IP, LAN, ARP, DNS 등 네트워크의 기본적인 개념들을 알고 응용계층부터 전송계층, 네트워크 계층, 데이터링크 계층, 물리계층을 거쳐 데이터가 어떤 과정을 거쳐 통신하는지에 대해 공부했다.</T1>
                </Summary>

                <Content />
            </Wrapper>
        ):(
            <h2>Network</h2>
        )}
        </Container>
    );
}