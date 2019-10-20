import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    flex-direction: row;
`;

const Title = styled.div`
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: center;

    font-size: 21px;
    font-weight: 700;
    color: #333;
`;

export default function({linkId}) {
    return (
        <Wrapper id={linkId[3]}>
            <Header>
                <Title>My contact</Title>
            </Header>
        </Wrapper>
    )
}