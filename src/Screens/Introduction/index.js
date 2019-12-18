import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";

const move = keyframes`
    from { margin-top: 25px; }
    to { margin-top: 50px; }
`;

const line1 = keyframes`
    0% {
        width: 40%;
        opacity: 0.9;
    }
    20% {
        width: 60%;
        opacity: 0.5;
    }
    40% {
        width: 30%;
        opacity: 0.7;
    }
    60% {
        width: 70%;
        opacity: 0.4;
    }
    80% {
        width: 50%;
        opacity: 0.5;
    }
    100% {
        width: 40%;
        opacity: 0.9;
    }
`;

const line2 = keyframes`
    0% {
        width: 30%;
        opacity: 0.7;
    }
    20% {
        width: 90%;
        opacity: 0.4;
    }
    40% {
        width: 60%;
        opacity: 0.5;
    }
    60% {
        width: 60%;
        opacity: 0.7;
    }
    80% {
        width: 40%;
        opacity: 0.9;
    }
    100% {
        width: 30%;
        opacity: 0.7;
    }
`;

const line3 = keyframes`
    0% {
        width: 70%;
        opacity: 0.4;
    }
    10% {
        width: 50%;
        opacity: 0.5;
    }
    30% {
        width: 60%;
        opacity: 0.7;
    }
    50% {
        width: 40%;
        opacity: 0.9;
    }
    70% {
        width: 60%;
        opacity: 0.5;
    }
    100% {
        width: 70%;
        opacity: 0.4;
    }
`;

const line4 = keyframes`
    0% {
        width: 60%;
        opacity: 0.7;
    }
    20% {
        width: 40%;
        opacity: 0.9;
    }
    50% {
        width: 60%;
        opacity: 0.5;
    }
    70% {
        width: 30%;
        opacity: 0.7;
    }
    90% {
        width: 90%;
        opacity: 0.4;
    }
    100% {
        width: 60%;
        opacity: 0.7;
    }
`;

const line5 = keyframes`
    0% {
        width: 40%;
        opacity: 0.9;
    }
    20% {
        width: 60%;
        opacity: 0.5;
    }
    40% {
        width: 30%;
        opacity: 0.7;
    }
    60% {
        width: 80%;
        opacity: 0.4;
    }
    80% {
        width: 50%;
        opacity: 0.5;
    }
    100% {
        width: 40%;
        opacity: 0.9;
    }
`;

const line6 = keyframes`
    0% {
        width: 20%;
        opacity: 0.2;
    }
    20% {
        width: 90%;
        opacity: 0.9;
    }
    40% {
        width: 50%;
        opacity: 0.7;
    }
    60% {
        width: 70%;
        opacity: 0.4;
    }
    80% {
        width: 80%;
        opacity: 0.5;
    }
    100% {
        width: 20%;
        opacity: 0.2;
    }
`;

const line7 = keyframes`
    0% {
        width: 50%;
        opacity: 0.4;
    }
    10% {
        width: 70%;
        opacity: 0.3;
    }
    20% {
        width: 80%;
        opacity: 0.9;
    }
    50% {
        width: 50%;
        opacity: 0.2;
    }
    70% {
        width: 20%;
        opacity: 0.2;
    }
    100% {
        width: 50%;
        opacity: 0.4;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    position: relative;
`;

const Wrapper = styled(FlexDiv)`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    background-color: #333;
    
    @media only screen and (max-width: 1080px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1080px) {
        flex-direction: row;
    }
`;

const GraphicArea = styled(FlexDiv)`
    width: 100%;
    height: 100%;
    flex: 2;
    align-items: center;
    justify-content: center;
`;
const Img = styled.img.attrs({
    src: require("../../assets/intro.png")
})`
    position: relative;
    width: 360px;
    transition: .4s;

    ${props => props.on ? `
        right: 0
    ` : `
        right: 50vw;
    `};
`;

const ContentArea = styled(FlexDiv)`
    width: 100%;
    height: 100%;
    flex: 3;
    flex-direction: column;
`;
const Introduction = styled(FlexDiv)`
    flex: 1;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding: 20px 50px;

    @media only screen and (max-width: 1080px) {
        justify-content: flex-start;
    }
`;
const IntroContainer = styled(FlexDiv)`
    flex-direction: column;
    width: 70%;
    transition: .7s;

    ${props => props.on ? `
        left: 0;
    ` : `
        left: 70vw;
    `};
`;
const GuideLine = styled.div`
    width: 60vw;
    height: 1px;
    background-color: #fff;
    position: relative;
    transition: .7s;

    ${props => props.on ? `
        left: 0;
    ` : `
        left: 70vw;
    `};
`;
const Title = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 35px;
    font-weight: 900;
    line-height: 40px;
    color: #fff;
    margin: 30px 0;

    @media only screen and (max-width: 1080px) {
        margin-bottom: 20px;
    }
`;
const Description = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 30px;
    color: #fff;
    margin-bottom: 30px;
`;

const LinkContainer = styled(FlexDiv)`
    position: absolute;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    bottom: 20px;
    right: 0px;
`;

const EmailBox = styled(FlexDiv)`
    width: 200px;
    height: 60px;
    background-color: #a347ba;
    margin: 10px 0;
    align-items: center;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    transition: .3s;

    ${props => props.on ? `
        left: 0;
    ` : `
        left: 250px;
    `};
`;

const EmailIcon = styled.img.attrs({
    src: require("../../assets/gmail.png")
})`
    width: 50px;
    height: 50px;
    margin: 5px;
`;
const EmailText = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 900;
    color: #fff;
`;
const GitBox = styled.a`
    display: flex;
    position: relative;
    width: 300px;
    height: 100px;
    background-color: #628ed9;
    margin: 10px 0;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    transition: .3s;
    pointer: cursor;
    text-decoration: none;

    ${props => props.on ? `
        left: 0;
    ` : `
        left: 350px;
    `};
`;
const Proflie = styled.img.attrs({
    src: require("../../assets/profile.jpg")
})`
    width: 90px;
    height: 90px;
    border-radius: 45px;
    margin: 5px;
    margin-right: 10px;
`;

const GitTexts = styled(FlexDiv)`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const GitBigText = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 900;
    color: #fff;
    margin: 2px 0;
`;
const GitSmallText = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    margin: 2px 0;
`;

export default function({introState}) {
    const [time, setTime] = useState(null);
    const [state1, setState1] = useState(false); //guideLine
    const [state2, setState2] = useState(false); //png
    const [state3, setState3] = useState(false); //comment
    const [state4, setState4] = useState(false); //email
    const [state5, setState5] = useState(false); //git
    const [state6, setState6] = useState(false); //clock

    const updateTime = function () {
        const currentDate=new Date();
        let apm=currentDate.getHours();
        if(apm<12)
        {
            apm="a.m";
        }
        else
        {
            apm="p.m";
        }
        
        const msg = apm + " " + (currentDate.getHours()-12)+":"+currentDate.getMinutes();

        setTime(msg)
        
        setTimeout(updateTime,60000);
    };

    useEffect(()=>{
        updateTime()
    })

    useEffect(()=>{
        if(introState) {
            setTimeout(()=>setState1(true), 0);
            setTimeout(()=>setState2(true), 300);
            setTimeout(()=>setState3(true), 900);
            setTimeout(()=>setState4(true), 1800);
            setTimeout(()=>setState5(true), 1900);
            setTimeout(()=>setState6(true), 2500);
        }else{
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
        }
    }, [introState])

    return(
        <Wrapper id="introduction">
            <GraphicArea>
                <Img on={state2} />
            </GraphicArea>

            <ContentArea>
                <Introduction>
                    <GuideLine on={state1} />

                    <IntroContainer on={state3}>
                        <Title>Full-Stack Web Developer</Title>
                        <Description />

                        <Description>
                            저는 빠르게 배우고 성장하며 열심히 일할 준비가 돼있는 개발자 정형수입니다.
                        </Description>

                        <Description>
                            주 언어는 Javascript 입니다.
                            Javascript는 ES6문법과 내부동작 방식 등을 심도있게 공부했고,
                            React, React-native,
                            node.js 등을 사용해 개발을 한 경험이 있습니다. 또한, Python, Django를 사용해 REST-API서버를 개발할 수 있습니다.
                            최근에는 오픈소스 활동에 관심이 가서 express를 공부하며 홈페이지 번역과 오타수정 등의 작은 참여를 시작했습니다.
                        </Description>
                    </IntroContainer>

                    <GuideLine on={state1} />
                </Introduction>
            </ContentArea>
            

            <LinkContainer>
                    <EmailBox on={state4}>
                        <EmailIcon />
                        <EmailText>Email 보내기</EmailText>
                    </EmailBox>

                    <GitBox on={state5} href={"https://github.com/jngcii"} target="_blank">
                        <Proflie />

                        <GitTexts>
                            <GitBigText>Github 방문하기</GitBigText>
                            <GitSmallText>https://github.com/jngcii</GitSmallText>
                        </GitTexts>
                    </GitBox>
                </LinkContainer>
        </Wrapper>
    );
}