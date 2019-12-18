import React from "react";
import styled from "styled-components";

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


const Intro = styled(FlexDiv)`
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img.attrs({
    src: require("../../assets/checkloud-logo.png")
})`
    width: 80px;
    margin: 40px;
`;
const IntroContainer = styled(FlexDiv)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
`;
const AppName = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #333;
    margin-bottom: 10px;

    @media only screen and (max-width: 1050px) {
        align-self: center;
    }
`;
const Summary = styled.span`
    font-family: 'Prompt', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #777;
    line-height: 23px;
    margin-bottom: 10px;
    text-align: center;

    @media only screen and (max-width: 1050px) {
        font-size: 15px;
    }

    @media only screen and (max-width: 512px) {
        font-size: 12px;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Link = styled.a.attrs({
    target: "_blank"
})`
    margin: 5px;
    height: 25px;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    
    @media only screen and (min-width: 1050px) {
        width: 230px;
    }
`;
const Git = styled.div`
    flex: 1;
    display: flex;
    font-family: 'Prompt', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #349eeb;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 1050px) {
        font-size: 13px;
    }
`;

export default function() {
    return (
        <Wrapper>
            <Container>
                <Intro>
                    <Logo />

                    <IntroContainer>
                        <AppName>Checkloud</AppName>
                        <Summary>
                            Checkloud는 생각과 계획을 체계적으로 관리할 수 있도록 도와주는 서비스입니다.
                        </Summary>
                        <Summary>
                            이 서비스는 사용자가 작성한 모든 체크리스트를 날짜별로 저장해 재사용할 수 있게 만들어 계획 관리를 쉽게 하고
                            각 체크리스트의 아이템들을 카테고리별로 저장해 생각을 깔끔하게 정리해줍니다.
                        </Summary>
                        <Summary>
                            계획을 세울 때마다 항상 비슷한 일상을 반복적으로 쓰는 비효율적인 일을 데이터화해
                            많은 사람들의 스케쥴 관리의 효율성을 높입니다.
                        </Summary>
                    </IntroContainer>
                </Intro>

                <LinkContainer>
                    <Link href="https://github.com/jngcii/checkloud-api">
                        <Git>API-Server Github Link</Git>
                    </Link>

                    <Link href="https://github.com/jngcii/checkloud">
                        <Git>Client Github Link</Git>
                    </Link>
                </LinkContainer>
            </Container>
        </Wrapper>
    );
}