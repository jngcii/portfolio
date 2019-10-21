import React, {useState} from "react";
import styled from "styled-components";
import Typing1 from "./Typing1";
import Typing2 from "./Typing2";
import Typing3 from "./Typing3";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: black;
`;

const T1 = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #fff;
`;

const Rest = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Summary = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Motion = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
`;

const PostIt = styled.div`
    flex: 3;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2e700;
    box-shadow: 2px 1px 3px 1px rgba(0,0,0,0.2);
`;

const T2 = styled.p`
    font-size: 21px;
    font-weight: 400;
    color: #555;
`;


export default function({mot}) {
    const [cnt, setCnt] = useState(1);

    return (
        <Wrapper>
            <Header>
                <T1>Motive</T1>
            </Header>

            <Rest>
                <Summary>
                    {cnt === 1 && <T2>People's life is repeative.</T2>}
                    {cnt === 2 && <T2>It is bothersome to type or write same thing repeatively.</T2>}
                    {cnt === 3 && <T2>What they have to do is in Complexity like a web.</T2>}
                    {cnt === 3 && <T2>So, sometimes, they forgot what to do.</T2>}
                </Summary>

                {mot && (
                    <Motion>
                        <PostIt>
                            {cnt === 1 && <Typing1 cnt={cnt} setCnt={setCnt} />}
                            {cnt === 2 && <Typing2 cnt={cnt} setCnt={setCnt} />}
                            {cnt === 3 && <Typing3 cnt={cnt} setCnt={setCnt} />}
                        </PostIt>
                    </Motion>
                )}
            </Rest>
        </Wrapper>
    )
}