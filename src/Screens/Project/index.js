import React, {useState} from "react";
import styled from "styled-components";
import Checkloud from "../../Components/Checkloud";
import Wink from "../../Components/Wink";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;
    padding-top: 150px;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
    min-height: 100vh;
    width: 80%;
    padding: 10px 30px;
    display: flex;
`;


export default function() {
    const [current, setCurrent] = useState("checkloud");

    return (
        <Wrapper id="project">
            <Header>
                <Title>Project</Title>
            </Header>

            <Selector>
                <SelectColumn isCurrent={current==="checkloud"} onClick={()=>setCurrent("checkloud")}>
                    Checkloud
                </SelectColumn>
                <SelectColumn isCurrent={current==="wink"} onClick={()=>setCurrent("wink")}>
                    Wink
                </SelectColumn>
            </Selector>

            <Divider>
                <IndicatorContainer style={{marginLeft: current==="checkloud" ? "0%" : "50%"}}>
                    <Indicator />
                </IndicatorContainer>
            </Divider>

            <Body>
                {current==="checkloud" ? <Checkloud /> : <Wink />}
            </Body>
        </Wrapper>
    );
}