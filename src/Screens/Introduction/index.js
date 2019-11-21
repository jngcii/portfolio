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


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px auto;
    background-color: #fff;
    padding-bottom: 100px;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Img = styled.img.attrs({
    src: require("../../assets/intro.png")
})`
    position: relative;
    top: -100px;
    width: 75%;
    max-width: 800px;
`;

const ImgContent = styled.div`
    bottom: 100px;
    position: absolute;
    width: 75%;
    max-width: 800px;
    display: flex;
    align-items: flex-end;
`;

const Column1 = styled.div`
    flex:3;
    height: 13vw;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Clock = styled.div`
    font-size: 2vw;
    font-weight: 800;

    @media only screen and (min-width: 1080px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 700px) {
        font-size: 12px;
    }
`;
const Column2 = styled.div`
    flex:5;
    height: 25vw;
    max-height: 270px;
    display: flex;
    flex-direction: column;
    opacity: 0.8;
`;

const Code = styled.div`
    margin-left: 15%;
    width: 70%;
    height: 5.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CodeLine1 = styled.div`
    height: 2px;
    background-color: yellow;
    animation: ${line1} 3s infinite;
`;

const CodeLine2 = styled(CodeLine1)`
    animation: ${line2} 2.2s infinite;
`;

const CodeLine3 = styled(CodeLine1)`
    animation: ${line3} 2s infinite;
`;

const CodeLine4 = styled(CodeLine1)`
    animation: ${line4} 2.5s infinite;
`;

const CodeLine5 = styled(CodeLine1)`
    animation: ${line5} 1.5s infinite;
`;

const CodeLine6 = styled(CodeLine1)`
    animation: ${line6} 3s infinite;
`;

const CodeLine7 = styled(CodeLine1)`
    animation: ${line7} 2s infinite;
`;


const Container = styled.div`
    position: relative;
    top: -97px;
    max-width: 850px;
    width: 70%;
    height: 150px;
    // border: 2px solid #111;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 50px;
    background-color: #f5f5f5;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

    @media only screen and (max-width: 512px) {
        width: 65%;
        border-radius: 20px;
        height: 100px;
    }
`;

const T1 = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 22px;
    font-weight: 900;
    color: #444;
    margin: 5px 0;
    line-height: 40px;

    @media only screen and (max-width: 512px) {
        font-size: 14px;
        line-height: 25px;
    }
`;

const Arrow = styled.img.attrs({
    src: require("../../assets/arrow_bottom.png")
})`
    width: 50px;

    animation: ${move} 1s linear infinite;
`;


export default function() {
    const [time, setTime] = useState(null);

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

    return(
        <Wrapper id="introduction">
            <ImgContainer>
                <Img />

                <ImgContent>
                    <Column1 />

                    <Column2>
                        <Code />
                        <Code />
                        <Code>
                            <CodeLine1 />
                        </Code>

                        <Code>
                            <CodeLine2 />
                        </Code>

                        <Code>
                            <CodeLine3 />
                        </Code>

                        <Code>
                            <CodeLine4 />
                        </Code>

                        <Code>
                            <CodeLine5 />
                        </Code>

                        <Code>
                            <CodeLine6 />
                        </Code>

                        <Code>
                            <CodeLine7 />
                        </Code>

                        <Code>
                            <CodeLine1 />
                        </Code>

                        <Code>
                            <CodeLine4 />
                        </Code>
                    </Column2>

                    <Column1>
                        <Clock>{time}</Clock>
                    </Column1>
                </ImgContent>
            </ImgContainer>

            <Container>
                <T1>Welcome to my portfolio.</T1>
                <T1>I'm web developer Hyungsoo.</T1>
                <T1 style={{marginBottom: 40}}>Let me introduce myself.</T1>
                <Arrow style={{tintColor: "#ddd"}} />
            </Container>
        </Wrapper>
    );
}