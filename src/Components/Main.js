import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.img.attrs({
    src: require("../assets/main_image.png")
})`
    width: 40vw;
`;

export default function({linkId}) {
    return (
        <Wrapper id={linkId[0]}>
            <Main />
        </Wrapper>
    );
}