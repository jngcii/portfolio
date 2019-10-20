import React, {useState} from "react";
import styled, {css}  from "styled-components";

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

    transition-duration: 0.2s;
    transition-timing-function: linear;

    ${props => props.now ? css`
        right: 0;
    ` : css`
        right: 249px;
    `};
`;

const T1 = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #fafafa;
    margin: 5px;
    z-index: 0;
`;

export default function({linkId}) {
    const [now, setNow] = useState(null);

    return (
        <Wrapper>
            {/* {rows.map(row => {
                return (
                    <Box key={row} onMouseOver={()=>setNow(row)} onMouseOut={()=>setNow(null)}>
                        <p style={{marginLeft: 12, marginTop: 7}}>{row}</p>
                        <Slider now={now===row} />
                    </Box>
                )
            })} */}
            <Box onMouseOver={()=>setNow("Intro")} onMouseOut={()=>setNow(null)}>
                <a href={`#${linkId[0]}`}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Intro"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>Welcome</p>
            </Box>

            <Box onMouseOver={()=>setNow("Skills")} onMouseOut={()=>setNow(null)}>
                <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Skills"} />
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>I know</p>
                <T1>Javascript</T1>
                <T1>Python</T1>
            </Box>

            
            <Box onMouseOver={()=>setNow("Project")} onMouseOut={()=>setNow(null)}>
                <a href={`#${linkId[2]}`}>
                    <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Project"} />
                </a>
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>I made</p>
            </Box>

            <Box onMouseOver={()=>setNow("Contact")} onMouseOut={()=>setNow(null)}>
                <Slider style={{backgroundColor:"rgba(0, 0, 0 ,0.6)"}} now={now==="Contact"} />
                <p style={{zIndex:0 ,marginLeft: 12, marginTop: 7}}>My contact</p>
            </Box>
        </Wrapper>
    )
}