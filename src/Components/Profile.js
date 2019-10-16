import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImage = styled.img.attrs({
    src: require('../assets/profile.jpg')
})`
    width: 240px;
    height: 240px;
    border-radius: 120px;
`;

const ProfileInfo = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const T1 = styled.p`
    font-size: 19px;
    font-weight: 600;
    color: "#777";
    margin: 10px auto;
`;

export default function() {
    return (
        <Wrapper>
            <ProfileImage />

            <ProfileInfo>
                <T1>Jung Hyung Soo</T1>
                <a href={"https://github.com/jngcii"}>
                    <T1>https://github.com/jngcii</T1>
                </a>
                <T1>javascript, python</T1>
            </ProfileInfo>
        </Wrapper>
    )
}