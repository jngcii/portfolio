import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;

    @media only screen and (max-width: 512px) {
        padding-bottom: 20px;
    }
`;

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
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

const Summary = styled.div` 
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #444;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
    }

    @media only screen and (max-width: 512px) {
        font-size: 12px;
    }
`;

const Body = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    @media only screen and (min-width: 1050px) {
        height: 360px;
        width: 900px;
    }
`;

const A = styled.div`
    border-radius: 5px;
    background-color: #fafafa;
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
    margin-bottom: 10px;
    align-self: center;
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
    font-weight: 400;
    color: #333;
    margin-left: 10px;
`;

export default function() {

    return (
        <Wrapper id="skills">
            <Header>
                <Title>Skills</Title>
            </Header>

            <Summary>I use Javascript mainly.</Summary>
            <Summary>I know Javascript very deeply and I can use it efficiently.</Summary>
            <Summary>I also use Python and Java a little.</Summary>

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
                                        I can make REST-API and Graphql-API.
                                    </ASummary>

                                    <ABig>Javascript</ABig>
                                    <ASmall>framework : express, graphql</ASmall>

                                    <ABig>Python</ABig>
                                    <ASmall>framework : Django</ASmall>

                                    <ABig>Docker</ABig>

                                    <ABig>NGINX</ABig>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>Javascript</ABig>
                                <ADetail>
                                    Javascript is my main using language. I know how javascript work with its engine(V8) in computer. If data is small to process and communicate, I usually use node.js for server environment.
                                </ADetail>

                                <ABig>Python</ABig>
                                <ADetail>
                                    Python is my first web programming language. I use Django-rest-framework for python project.
                                </ADetail>

                                <ABig>Docker</ABig>
                                <ADetail>
                                    I use Docker to administrate project.
                                </ADetail>

                                <ABig>NGINX</ABig>
                                <ADetail>
                                    I usually use NGINX for reverse-proxy server or Load-Balancer using upstream module.
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
                
                <A style={{alignSelf:"center"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/frontend.png")} />
                    </IconContainer>

                    <InnerA>
                        <AContainer>
                            <Left>
                                <ATitle>Client</ATitle>

                                <ABody>
                                    <ASummary>
                                        I use React for front-end development.
                                    </ASummary>

                                    <ABig>HTML5</ABig>

                                    <ABig>CSS3</ABig>

                                    <ABig>Javascript</ABig>
                                    <ASmall>version : ~ ES5 & ES6</ASmall>
                                    <ASmall>library &nbsp;: React, React-native, redux, apollo, react-hooks</ASmall>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>HTML5 & CSS3</ABig>
                                <ADetail>
                                    Basically, I know syntax HTML5 and CSS3 and can use it freely.
                                </ADetail>

                                <ABig>Javascript</ABig>
                                <ADetail>
                                    I use React and React-Native javascript library to make dynamic web and to communicate with Server.
                                </ADetail>
                                <ADetail>
                                    To manage state, Redux or Apollo-client is used and recently I'm using apollo-client, apollo-inmemory-cache and react-hooks.
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
                
                <A style={{alignSelf:"flex-end"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/others.png")} />
                    </IconContainer>
                    
                    <InnerA>
                        <AContainer>
                            <Left>
                                <ATitle>Others</ATitle>

                                <ABody>
                                    <ASummary>
                                        I use git as version management.
                                    </ASummary>

                                    <ABig>Version Management</ABig>
                                    <ASmall>tools : Git</ASmall>

                                    <ABig>Simple Design</ABig>
                                    <ASmall>tools : Photoshop, Procreate</ASmall>
                                </ABody>
                            </Left>

                            <Divider />

                            <Right>
                                <ABig>Git</ABig>
                                <ADetail>
                                    I use git to manage my project version and Collaborate. I can use collaborating command of git.
                                </ADetail>

                                <ABig>Simple Design</ABig>
                                <ADetail>
                                    I learned design in university. So I can design a little.
                                </ADetail>
                            </Right>
                        </AContainer>
                    </InnerA>
                </A>
            </Body>
        </Wrapper>
    );
}