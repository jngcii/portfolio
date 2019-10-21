import React, {useState} from "react";
import styled from "styled-components";
import OS from "./OS";
import Lan from "./Lan";
import NW from "./NW";
import DS from "./DS";
import Tools from "./Tools";

const Wrapper = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 21px;
    font-weight: 700;
    color: #111;
`;

const Body = styled.div`
    flex: 1;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function({linkId}) {
    const [pick, setPick] = useState(null);

    return (
        <Wrapper id={linkId[1]}>
            <Header>
                <Title><h1>I know</h1></Title>
            </Header>

            <Body>
                <OS pick={pick} setPick={setPick} />
                <Lan pick={pick} setPick={setPick} />
                <NW pick={pick} setPick={setPick} />
                <DS pick={pick} setPick={setPick} />
                <Tools pick={pick} setPick={setPick} />
            </Body>
        </Wrapper>
    )
}