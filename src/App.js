import React, {useState} from "react";
import styled from "styled-components";
import Introduction from "./Screens/Introduction";
import Skills from "./Screens/Skills";
import Project from "./Screens/Project";
import ReactFullpage from '@fullpage/react-fullpage';
import First from "./Components/Checkloud/First";
import Second from "./Components/Checkloud/Second";

const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const MainWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    font-family: 'Prompt', sans-serif;
    font-size: 40px;
    color: #333;
    background-color: #fafafa;
    transition: .4s;
    z-index: 3;

    @media only screen and (max-width: 1050px) {
        font-size: 23px;
        flex-direction: column;
        justify-content: center;
    }

    ${props => props.s && `
        height: 50px;
        padding-left: 20px;
        background-color: #333;

        @media only screen and (max-width: 1050px) {
            height: 70px;
            flex-direction: column;
            padding: 0;
            justify-content: flex-start;
            padding-top: 10px;
        }
    `};
`;

const Avatar = styled.img.attrs({
    src: require("./assets/avatar.png")
})`
    width: 160px;
    margin: 0 20px;
    transition: .2s;
    user-select: none;

    ${props => props.s && `
        width: 0;
        height: 0;
        margin: 0;
    `};
`;

const Title = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 28px;
    color: #555;
    transition: .2s;
    z-index: 1;
    margin-top: 1px;
    margin-bottom:1px;
    user-select: none;

    @media only screen and (max-width: 1050px) {
        font-size: 21px;
    }

    ${props => props.s && `
        font-size: 21px;
        color: #fafafa;

        @media only screen and (max-width: 1050px) {
            font-size: 20px;
        }
    `};
`;
const Name = styled(Title)`
    font-size: 36px;
    user-select: none;

    @media only screen and (max-width: 612px) {
        font-size: 25px;
    }

    ${props => props.s && `
        font-size: 21px;
        color: #fafafa;

        @media only screen and (max-width: 612px) {
            font-size: 20px;
        }
    `};
`;

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 5;

    @media only screen and (max-width: 1050px) {
        justify-content: center;
    }

    ${props => props.s && `
        @media only screen and (max-width: 1050px) {
            top: 30px;
            justify-content: center;
        }
    `};
`;

const Link = styled.a`
    margin: 0 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    transition: .2s;
    text-decoration: none;
    user-select: none;

    :hover{
        font-weight: 900;
        color: #111;
        font-size: 16px;
    }

    ${props => props.s && `
        color: #fafafa;

        :hover{
            color: #fff;
        }
    `};

    ${props => props.now && `
        font-weight: 900;
        color: #fff;
        font-size: 16px;
    `};

    @media only screen and (max-width: 1050px) {
        font-size: 12px;
        font-weight: 700;
        color: #999;
        margin: 0 7px;


        :hover{
            font-weight: 900;
            color: #111;
            font-size: 13px;
        }
    }
`;


const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
`;

export default function(){
    const [navState, setNavState] = useState("b");
    const [introState, setIntroState] = useState(false);
    const [proj, setProj] = useState("checkloud");
    const [page, setPage] = useState(0)

    const fullpageOptions = {
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
        scrollOverflow: false,
        onLeave: function(origin, destination, direction){
            if(origin.index === 0){
                setNavState("s");
                setIntroState(false);
            } else if(destination.index === 0) {
                setNavState("b");
                setIntroState(false);
            }

            if(destination.index === 0){
                setPage(0);
            }else if(destination.index === 1){
                setPage(1);
            }else if(destination.index === 2){
                setPage(2);
            }else{
                setPage(3);
            }
        },

        afterLoad: function(origin, destination, direction){
            if(destination.index === 1) setIntroState(true);
        }
    };

    return (
        <Wrapper>
            <MainWrapper s={navState==="s"}>
                <Avatar s={navState==="s"}/>

                {navState==="b" && (
                    <Title s={navState==="s"}>
                        This is &nbsp;
                    </Title>
                )}

                {navState==="b" && (
                <Title s={navState==="s"}>
                    Web Developer &nbsp;
                </Title>
                )}

                <Title style={{display:"flex", alignItems:"center"}}>
                    <Name s={navState==="s"} style={{color: "#fad82d", fontWeight: "900"}}>
                        HyungSoo
                    </Name>
                    <Title s={navState==="s"}>
                        's Portfolio
                    </Title>
                </Title>
            </MainWrapper>

            <Nav s={navState==="s"}>
                <Link now={page===1} s={navState==="s"} href="#introduction">INTRODUCTION</Link>
                <Link now={page===2} s={navState==="s"} href="#skills">SKILLS</Link>
                <Link now={page===3} s={navState==="s"} href="#project">PROJECT</Link>
            </Nav>

            <ReactFullpage
                //fullpage options
                {...fullpageOptions}
                scrollingSpeed = {400} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <Content />
                            </div>

                            <div className="section">
                                <Introduction introState={introState} />
                            </div>

                            <div className="section">
                                <Skills />
                            </div>

                            <div className="section">
                                <Project proj={proj} setProj={setProj} page={page} />
                            </div>

                            {proj === "checkloud" && (
                                <div className="section">
                                    <First />
                                </div>
                            )}

                            {proj === "checkloud" && (
                                <div className="section">
                                    <Second />
                                </div>
                            )}
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </Wrapper>
    );
}