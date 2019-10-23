import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;
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
`;

const Body = styled.div`
    position: relative;
    height: 360px;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

const A = styled.div`
    position: absolute;
    width: 280px;
    height: 360px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;

    transition: .5s;

    :hover{
        width: 900px;
        z-index: 1;
    }
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

const Row = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    padding: 5px 10px;
`;
const Left = styled.div`
    width: 280px;
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #666;
`;
const Right = styled.div`
    flex:1;
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #444;
`;

export default function() {
    const [pick, setPick] = useState(null);

    return (
        <Wrapper id="skills">
            <Header>
                <Title>Skills</Title>
            </Header>

            <Summary>I use Javascript mainly.</Summary>
            <Summary> I know Javascript very deeply and I can use it efficiently.</Summary>
            <Summary>I also use Python and Java a little.</Summary>

            <Body>
                <A style={{alignSelf:"flex-start"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/backend.png")} />
                    </IconContainer>

                    <ATitle>Back-end</ATitle>
                    <ABody>
                        <Row>
                            <Left>Javascript/Express/Graphql</Left>
                            {/* <Right>scope, prototype, closure 등의 기본적인 javascript를 이해하고 express 프레임워크를 통해 rest/graphql API 서버 구축 가능</Right> */}
                        </Row>
                        <Row>
                            <Left>Python/Django</Left>
                        </Row>
                    </ABody>
                </A>
                
                <A style={{alignSelf:"center"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/frontend.png")} />
                    </IconContainer>

                    <ATitle>Front-end</ATitle>
                    <ABody>
                        <Row>
                            <Left>React/React-native</Left>
                        </Row>
                        <Row>
                            <Left>Javscript</Left>
                        </Row>
                        <Row>
                            <Left>Html</Left>
                        </Row>
                        <Row>
                            <Left>Css</Left>
                        </Row>
                    </ABody>
                </A>
                
                <A style={{alignSelf:"flex-end"}}>
                    <IconContainer>
                        <Icon src={require("../../assets/others.png")} />
                    </IconContainer>

                    <ATitle>Others</ATitle>
                    <ABody>
                        <Row>
                            <Left>Git</Left>
                        </Row>
                        <Row>
                            <Left>Docker</Left>
                        </Row>
                        <Row>
                            <Left>Linux</Left>
                        </Row>
                        <Row>
                            <Left>nginx</Left>
                        </Row>
                    </ABody>
                </A>
            </Body>
        </Wrapper>
    )
}