import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
    display: flex;
    position: relative;
`;

const Wrapper = styled(FlexDiv)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #fafafa;
`;

const Body = styled(FlexDiv)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 150px auto;

    @media only screen and (min-width: 1050px) {
        height: 360px;
        width: 900px;
    }
`;

const A = styled.div`
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    display: flex;

    @media only screen and (min-width: 1050px) {
        position: absolute;
        width: 280px;
        height: 360px;
        transition: .2s;

        :hover{
            width: 900px;
            z-index: 1;
        }
    }

    @media only screen and (max-width: 1050px) {
        width: 80vw;
        margin: 20px auto;
        padding: 40px 0;
        position: relative;
    }
`;
const InnerA = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
`;

const IconContainer = styled.div`
    top: -20px;
    left: -20px;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fad82d;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    position: absolute;
`;
const Icon = styled.img`
    width: 30px;
`;

const AContainer = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1050px) {
        width: 900px;
        height: 360px;
    }

`;
const ATitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #333;
    margin: 10px 60px;
    position: relative;
`;

const ABody = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Left = styled.div`
    width: 280px;
    height: 100%;

    @media only screen and (max-width: 1050px) {
        display: none;
    }
`;
const Divider = styled.div`
    width: 1px;
    height: 95%;
    background-color: #ddd;

    @media only screen and (max-width: 1050px) {
        display: none;
    }
`;
const Right = styled.div`
    width: 619px;
    height: 100%;
    
    @media only screen and (max-width: 1050px) {
        width: 100%;
        padding: 0 20px;
    }
`;

const ASummary = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: #e3c934;
    align-self: flex-start;
    margin: 10px;
`;

const ABig = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #333;
    margin-left: 10px;
    margin-top: 12px;
`;

const ASmall = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #333;
    margin-left: 10px;
`;

const ADetail = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 5px;
`;

export default function() {

    return (
        <Wrapper id="skills">

            <Body>
                <A style={{alignSelf:"flex-start"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/backend.png")} />
                    </IconContainer>

                    <InnerA>
                        <AContainer>
                            <Left>
                                <ATitle>Server</ATitle>

                                <ABody>
                                    <ASummary>
                                        REST-API 와 Graphql-API 사용
                                    </ASummary>

                                    <ABig>Javascript</ABig>
                                    <ASmall>프레임워크 : express, graphql</ASmall>

                                    <ABig>Python</ABig>
                                    <ASmall>프레임워크 : Django</ASmall>

                                    <ABig>Docker</ABig>

                                    <ABig>NGINX</ABig>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>Javascript</ABig>
                                <ADetail>
                                    Javascript가 주력 언어입니다. Javascript의 구동환경 별 작동방식에 대해 잘 알고 있습니다.
                                    Express 프레임워크와 Grapqhl-API 및 REST-API를 결합해 서버를 구축해봤으며, Express 오픈소스를 분석하고 커뮤니티에 기여하기 위해 노력하고 있습니다.
                                </ADetail>

                                <ABig>Python</ABig>
                                <ADetail>
                                    Python은 첫 프로그래밍 언어입니다. Python 프로젝트에는 프레임워크로 Django와 DRF(Django Rest Framework)를 사용합니다.
                                </ADetail>

                                <ABig>Docker</ABig>
                                <ADetail>
                                    프로젝트를 관리하기 위해 Docker 컨테이너를 활용합니다.
                                </ADetail>

                                <ABig>NGINX</ABig>
                                <ADetail>
                                    Nginx는 리버스 프록시 환경 혹은 로드밸런싱을 위해 사용하고 있습니다.
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
                
                <A style={{alignSelf:"center"}}>
                    <IconContainer style={{backgroundColor: "#628ed9"}}>
                        <Icon src={require("../../assets/frontend.png")} />
                    </IconContainer>

                    <InnerA>
                        <AContainer>
                            <Left>  
                                <ATitle>Client</ATitle>

                                <ABody>
                                    <ASummary style={{color: "#628ed9"}}>React 와 React-Native 사용</ASummary>

                                    <ABig>HTML5</ABig>

                                    <ABig>CSS3</ABig>

                                    <ABig>Javascript</ABig>
                                    <ASmall>버전 : ~ ES5 & ES6</ASmall>
                                    <ASmall>라이브러리 &nbsp;: React, React-native, Redux, Apollo, React-hooks</ASmall>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>HTML5 & CSS3</ABig>
                                <ADetail>기본적으로 HTML5와 CSS3로 웹을 구성하는 방법을 알고 자유롭게 사용할 수 있습니다.</ADetail>

                                <ABig>Javascript</ABig>
                                <ADetail>
                                    동적 웹페이지를 만들고 서버와 통신하기 위해 자바스크립트 라이브러리 React와 React Native를 사용합니다.
                                </ADetail>
                                <ADetail>
                                    상태관리를 위해, Redux와 Apollo Client를 사용하는데, 주로 Apollo Client와 Apollo Inmemory Cache, React Hooks의 함수형 컴퍼넌트를 결합해 사용합니다.
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
                
                <A style={{alignSelf:"flex-end"}}>
                    <IconContainer style={{backgroundColor: "#a347ba"}}>
                        <Icon src={require("../../assets/others.png")} />
                    </IconContainer>
                    
                    <InnerA>
                        <AContainer>
                            <Left>
                                <ATitle>Others</ATitle>

                                <ABody>
                                    <ASummary style={{color: "#a347ba"}}>버전관리를 위해 git 사용</ASummary>

                                    <ABig>Version Management</ABig>
                                    <ASmall>도구 : Git</ASmall>

                                    <ABig>Simple Design</ABig>
                                    <ASmall>도구 : Photoshop, Procreate</ASmall>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>Git</ABig>
                                <ADetail>
                                    프로젝트의 버전관리와 협업을 위해 git을 사용합니다.
                                </ADetail>

                                <ABig>Simple Design</ABig>
                                <ADetail>
                                    웹디자인을 위해 Photoshop과 Procreate를 사용합니다. 
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
            </Body>
        </Wrapper>
    );
}