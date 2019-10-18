import React, {useState} from "react";
import styled, {keyframes, css}  from "styled-components";

const SlideIn = keyframes`
    100% { right: 0; }
`;

const SlideOut = keyframes`
    100% { right: 249px; }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 24.5%;
    display: flex;
    overflow: hidden;
    
    font-size: 19px;
    font-weight: 700;
    color: #555;
`;

const Slider = styled.div`
    width: 100%;
    height: 24.5vh;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    right: 249px;
    animation: ${SlideOut} 0.3s forwards;

    ${props => props.now && css`
        animation: ${SlideIn} 0.3s forwards;
    `};
`;

export default function() {
    const rows = ["Intro", "Project", "Skills", "Contact"];
    const [now, setNow] = useState(null);

    return (
        <Wrapper>
            {rows.map(row => {
                return (
                    <Box key={row} onMouseOver={()=>setNow(row)} onMouseOut={()=>setNow(null)}>
                        <p style={{marginLeft: 12, marginTop: 7}}>{row}</p>
                        <Slider now={now===row} />
                    </Box>
                )
            })}
        </Wrapper>
    )
}