import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    flex-direction: column;
`;
const TTitleContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
`;
const TTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    vertical-align: center;
    padding: 0 100px;
`;
const TContent = styled.div`
    width: 80%;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

    @media only screen and (min-width: 1050px) {
        flex: 2;
    }
    
`;

const TSubTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
    margin-bottom: 10px;
`;
const TSubTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
`;
const TImg = styled.img`
    float: left;
    height: 25px;
    
    @media only screen and (max-width: 1050px) {
        height: 20px;
    }
`;
const TText = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    line-height: 25px;
    margin-bottom: 30px;
    
    @media only screen and (max-width: 1050px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export default function() {
    return (
        <Wrapper>
            <TTitleContainer>
                <TTitle>Tech Stack</TTitle>
            </TTitleContainer>

            <TContent>
                <TSubTitleContainer>
                    <TSubTitle>Client</TSubTitle>
                </TSubTitleContainer>

                <TImg src={require("../../assets/react-native-img.png")} />
                <TText>&nbsp; React Native  :  모바일 애플리케이션 프론트엔드 구축에 React Native를 사용했습니다.</TText>

                <TImg src={require("../../assets/apollo-client-img.png")} />
                <TText>&nbsp; Apollo Client  :  Apollo client는 React의 상태관리와 캐싱을 위해 사용됐습니다.</TText>
                    

                <TSubTitleContainer style={{ marginTop: 20 }}>
                    <TSubTitle>Server</TSubTitle>
                </TSubTitleContainer>

                <TImg src={require("../../assets/nginx-img.png")} />
                <TText>&nbsp; NginX  :  NginX 웹서버가 리눅스 우분투 16.04 LTS버전에서 로드밸런싱 서버로 구동중입니다.</TText>

                <TImg src={require("../../assets/node-img.png")} />
                <TText>&nbsp; Node.js  :  Javascript의 서버 구동환경인 Node.js가 사용됐습니다.</TText>

                <TImg src={require("../../assets/express-img.png")} />
                <TText>&nbsp; Express.js  :  작은 텍스트 기반 데이터 통신을 위해 가볍고 효율적인 Express 프레임워크를 사용했습니다.</TText>

                <TImg src={require("../../assets/graphql-img.png")} />
                <TText>&nbsp; GraphQL  :  REST-API가 아닌 Graphql-API를 Express프레임워크와 함께 사용했습니다.</TText>
            </TContent>
        </Wrapper>
    );
}