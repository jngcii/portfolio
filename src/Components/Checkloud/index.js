import React, {useState} from "react";
import styled from "styled-components";
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Logo = styled.img.attrs({
    src: require("../../assets/checkloud-logo.png")
})`
    width: 80px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media only screen and (max-width: 1050px) {
        align-self: flex-start;
    }
`;

const AppName = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #333;
    margin-bottom: 15px;

    @media only screen and (max-width: 1050px) {
        align-self: flex-start;
    }
`;
const Summary = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #777;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
    }

    @media only screen and (max-width: 512px) {
        font-size: 12px;
    }
`;

const Motivation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 512px) {
        font-size: 12px;
    }
`;
const MDescContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media only screen and (max-width: 1050px) {
        padding: 0;
    }
`;
const MTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    margin: 10px 0;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
    }
`;
const MDesc = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #555;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
        color: #777;
    }
`;
const PostitContainer = styled.div`
    width: 550px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding:10px;

    @media only screen and (max-width: 1050px) {
        width: 100%;
        justify-content: flex-start;
    }
`;
const Postit = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    background-color: #fad82d;

    @media only screen and (max-width: 1050px) {
        width: 130px;
        height: 200px;
        margin-right: 20px;
    }
`;
const CheckItem = styled.div`
    font-family: 'Gochi Hand', cursive;
    font-size: 19px;
    font-weight: 600;
    color: #222;
`;

const Description = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    flex-direction: column;

    @media only screen and (min-width: 1050px) {
        height: 500px;
        margin-top: 20px;
    }

    @media only screen and (max-width: 1050px) {
        margin-bottom: 20px;
    }
`;
const DDescContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1050px) {
        width: 50%;
        align-self: flex-end;
        padding-top: 100px;
    }

    @media only screen and (max-width: 1050px) {
        width: 100%;
        margin-top: 30px;
    }
`;
const DTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    margin: 10px 0;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
    }
`;
const DDesc = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #555;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
        align-self: flex-start;
        color: #777;
    }
`;
const DImageContainer = styled.div`
    display: flex;

    @media only screen and (min-width: 1050px) {
        width: 60%;
        align-self: flex-start;
        position: absolute;
    }

    @media only screen and (max-width: 1050px) {
        overflow: hidden;
        postision: relative;
        flex-direction: column;
    }
`;
const DImage2 = styled.img`
    @media only screen and (min-width: 1050px) {
        width: 70%;
        top: 60px;
        position: absolute;
    }

    @media only screen and (max-width: 1050px) {
        width: 100%;
    }
`;
const DImage = styled.img`
    @media only screen and (min-width: 1050px) {
        width: 70%;
        left: -50px;
        top: -50px;
        position: absolute;
    }
    
    @media only screen and (max-width: 1050px) {
        width: 100%;
    }
`;

const Tech = styled.div`
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 100px;

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
    }
`;
const TTitleContainer = styled.div`

    @media only screen and (min-width: 1050px) {
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 1050px) {
        height: 100px;
    }
    
`;
const TTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    vertical-align: center;
`;
const TContent = styled.div`
    padding: 10px 20px;
    background-color: #fafafa;
    border-radius: 10px;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

    @media only screen and (min-width: 1050px) {
        flex: 2;
    }
    
    @media only screen and (max-width: 1050px) {
        width: 90%;
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
    font-size: 17px;
    font-weight: 400;
    color: #555;
    line-height: 25px;
    margin-bottom: 15px;
    
    @media only screen and (max-width: 1050px) {
        font-size: 14px;
        line-height: 20px;
    }
`;


const LinkContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    @media only screen and (max-width: 1050px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
const Link = styled.a.attrs({
    target: "_blank"
})`
    margin: 5px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    
    @media only screen and (min-width: 1050px) {
        width: 230px;
    }
    
    @media only screen and (max-width: 1050px) {
        justify-content: flex-start;
        text-align: left;
    }
`;
const Git = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #349eeb;
    
    @media only screen and (max-width: 1050px) {
        font-size: 13px;
    }
`;

export default function() {
    const [memo, setMemo] = useState(1);
    return (
        <Wrapper>
            <Logo />

            <AppName>Checkloud</AppName>
            <Summary>Innovation of checklist.</Summary>
            <Summary>Can save each checklist's item by category and all checklist by date automatically</Summary>
            <Summary>so that you can manage your schedule efficiently.</Summary>

            <LinkContainer>
                <Link href="https://github.com/jngcii/checkloud-api">
                    <Git>API-Server Github Link</Git>
                </Link>

                <Link href="https://github.com/jngcii/checkloud">
                    <Git>Client Github Link</Git>
                </Link>
            </LinkContainer>

            <Motivation>
                <MDescContainer>
                    <MTitle>Motivation</MTitle>
                    <MDesc>We are bored to write same checklist everytime by recursive life.</MDesc>
                    <MDesc>And also, we used to forget what to do because we just live without ordering our thoughts.</MDesc>
                </MDescContainer>

                <PostitContainer>
                    {memo >= 1 && (
                        <Typing speed={30} onFinishedTyping={()=>setMemo(memo+1)}>
                            <Postit>
                                <CheckItem>meet client</CheckItem>
                                <CheckItem>buy eggs</CheckItem>
                                <CheckItem>buy milk</CheckItem>
                                <CheckItem>study O/S</CheckItem>
                            </Postit>
                        </Typing>
                    )}


                    {memo >= 2 && (
                        <Typing speed={30} onFinishedTyping={()=>{
                            setMemo(memo+1);
                            setTimeout(()=>{
                                setMemo(0);
                                setTimeout(()=>setMemo(1), 200)
                            }, 1000);
                        }}>
                            <Postit>
                                <CheckItem>meet client</CheckItem>
                                <CheckItem>buy eggs</CheckItem>
                                <CheckItem>buy milk</CheckItem>
                                <CheckItem>....?</CheckItem>
                            </Postit>
                        </Typing>
                    )}
                </PostitContainer>
            </Motivation>

            <Description>
                <DDescContainer>
                    <DTitle>Description</DTitle>
                    <DDesc>We can make checklist, then it'll be saved by date in server automatically. We can reuse it whenever we want.</DDesc>
                    <DDesc>Each checklist's item also can be saved by category, so we don't need to order our thoughts every time we make schedule.</DDesc>
                </DDescContainer>

                <DImageContainer>
                    <DImage src={require("../../assets/checkloud-ss2.png")} />
                    <DImage2 src={require("../../assets/checkloud-ss1.png")} />
                </DImageContainer>
            </Description>

            <Tech>
                <TTitleContainer>
                    <TTitle>Tech Stack</TTitle>
                </TTitleContainer>

                <TContent>
                    <TSubTitleContainer>
                        <TSubTitle>Client</TSubTitle>
                    </TSubTitleContainer>

                    <TImg src={require("../../assets/react-native-img.png")} />
                    <TText>&nbsp; React Native  :  I used react native javascript library to build mobile application front-end.</TText>

                    <TImg src={require("../../assets/apollo-client-img.png")} />
                    <TText>&nbsp; Apollo Client  :  Apollo client is used for react state management and caching.</TText>
                    

                    <TSubTitleContainer style={{ marginTop: 20 }}>
                        <TSubTitle>Server</TSubTitle>
                    </TSubTitleContainer>

                    <TImg src={require("../../assets/nginx-img.png")} />
                    <TText>&nbsp; NginX  :  NginX web server is running in linux ubuntu 16.04 LTS. It's used for reverse proxy server and load balancer.</TText>

                    <TImg src={require("../../assets/node-img.png")} />
                    <TText>&nbsp; Node.js  :  Server side environment is node.js.</TText>

                    <TImg src={require("../../assets/express-img.png")} />
                    <TText>&nbsp; Express.js  :  Express is chosen for framework because it's light and efficient to transport only text data.</TText>

                    <TImg src={require("../../assets/graphql-img.png")} />
                    <TText>&nbsp; GraphQL  :  I used GraphQL API with express framework, not Rest-API.</TText>
                </TContent>
            </Tech>
        </Wrapper>
    );
}