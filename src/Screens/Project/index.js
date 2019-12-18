import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import Wink from "../../Components/Wink";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Selector = styled.div`
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`;
const SelectColumn = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 19px;
    font-weight: ${props => props.isCurrent ? "700" : "500"};
    color: ${props => props.isCurrent ? "#333" : "#aaa"};
    transition: .5s;
    cursor: pointer;
`;

const Divider = styled.div`
    position: relative;
    top: -3px;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const IndicatorContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    transition: .5s;
`;
const Indicator = styled.div`
    width: 100%;
    height: 100%;
    background-color:  #fad82d;
`;

const Body = styled.div`
    flex: 1;
    width: 80%;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
`;


export default function({proj, setProj}) {

    return (
        <Wrapper id="project">
            <Header />

            <Selector>
                <SelectColumn isCurrent={proj==="checkloud"} onClick={()=>setProj("checkloud")}>
                    Checkloud
                </SelectColumn>
                <SelectColumn isCurrent={proj==="wink"} onClick={()=>{
                    // setProj("wink");
                }}>
                    Wink
                </SelectColumn>
            </Selector>

            <Divider>
                <IndicatorContainer style={{marginLeft: proj==="checkloud" ? "0%" : "50%"}}>
                    <Indicator />
                </IndicatorContainer>
            </Divider>

            <Body>
                {proj==="checkloud" ? (
                    <ReactPlayer
                        url={require("../../assets/cccf.mp4")}
                        playing={true} 
                        width='93%'
                        height='93%'
                    />
                ) : (
                    <Wink />
                )}
            </Body>
        </Wrapper>
    );
}