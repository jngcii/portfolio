import React from "react";
import styled from "styled-components";
import Role from "./Role";
import Tech from "./Tech";

const FlexDiv = styled.div`
    display: flex;
    position: relative;
`;

const Wrapper = styled(FlexDiv)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

const Container = styled(FlexDiv)`
    flex-direction: column;
    width: 60%;
`;


export default function() {
    return (
        <Wrapper>
            <Container>
                <Role />

                <Tech />
            </Container>
        </Wrapper>
    );
}