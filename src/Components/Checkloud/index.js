import React from "react";
import styled from "styled-components";

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
    margin: 20px auto;
`;

const AppName = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #333;
    margin-bottom: 10px;
`;
const Discription = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #777;
`;

const Motivation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
const MDiscContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const MTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    margin: 10px 0;
`;
const MDisc = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #555;
`;
const PostitContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
`;
const Postit = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    background-color: #fad82d;
`;
const CheckItem = styled.div`
    font-family: 'Gochi Hand', cursive;
    font-size: 19px;
    font-weight: 600;
    color: #222;
`;

const Description = styled.div`
    margin-bottom: 30px;
    display: flex;
    height: 550px;
    align-items: center;
    top: -60px;
    position: relative;
`;
const DImageContainer = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 30px;
`;
const DImage = styled.img`
    height: 500px;
    position: absolute;
`;
const DDiscContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const DTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    margin: 10px 0;
`;
const DDisc = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #555;
`;

const Tech = styled.div`
    margin-top: 100px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -60px;
    position: relative;
`;
const TTitle = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #333;
    margin-bottom: 40px;
`;
const TImg = styled.img.attrs({
    src: require("../../assets/checkloud-tech.png")
})`
    width: 90%;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Link = styled.a`
    margin: 10px;
    padding: 10px;
    height: 40px;
    width: 200px;
    border-radius: 25px;
    background-color: #efefef;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    text-decoration: none;
`;
const GitIcon = styled.img.attrs({
    src: require("../../assets/github.png")
})`
    height:40px;
`;
const Git = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #333;
`;

export default function() {
    return (
        <Wrapper>
            <Logo />
            <AppName>Checkloud</AppName>
            <Discription>Innovation of checklist.</Discription>
            <Discription>Can save each checklist's item by category and all checklist by date automatically so that you can manage your schedule efficiently.</Discription>

            <Motivation>
                <MDiscContainer>
                    <MTitle>Motivation</MTitle>
                    <MDisc>We are bored to write same checklist everytime by recursive life.</MDisc>
                    <MDisc>And also, we used to forget what to do because we just live without ordering our thoughts.</MDisc>
                </MDiscContainer>

                <PostitContainer>
                    <Postit>
                        <CheckItem>meet client</CheckItem>
                        <CheckItem>buy eggs</CheckItem>
                        <CheckItem>buy milk</CheckItem>
                        <CheckItem>study</CheckItem>
                    </Postit>
                </PostitContainer>

                <PostitContainer>
                    <Postit>
                        <CheckItem>meet client</CheckItem>
                        <CheckItem>buy eggs</CheckItem>
                        <CheckItem>buy milk</CheckItem>
                        <CheckItem>study</CheckItem>
                    </Postit>
                </PostitContainer>
            </Motivation>

            <Description>
                <DImageContainer>
                    <DImage src={require("../../assets/checkloud-ss2.png")} style={{bottom:100}} />
                    <DImage src={require("../../assets/checkloud-ss1.png")} style={{right: 100, top: 100}} />
                </DImageContainer>

                <DDiscContainer>
                    <DTitle>Description</DTitle>
                    <DDisc>We can make checklist, then it'll save by date in server automatically. We can reuse it whenever we want.</DDisc>
                    <DDisc>Each checklist's item also can be saved by category, so we don't need to order our thoughts every time we make schedule.</DDisc>
                </DDiscContainer>
            </Description>

            <Tech>
                <TTitle>Tech Stack</TTitle>
                <TImg />
            </Tech>

            <LinkContainer>
                <Link href="https://github.com/jngcii/checkloud-api">
                    <GitIcon />
                    <Git>API-Server</Git>
                </Link>

                <Link href="https://github.com/jngcii/checkloud">
                    <GitIcon />
                    <Git>Client</Git>
                </Link>
            </LinkContainer>
        </Wrapper>
    );
}