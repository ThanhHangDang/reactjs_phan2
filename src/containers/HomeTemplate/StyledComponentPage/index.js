import React from 'react';
import styled, {keyframes} from "styled-components";

const spin = keyframes`
    
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`

const Loader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 120px;
    height: 120px;
    margin: -76px 0 0 -76px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid ${(props) => (props.second ? "red" : "#3498db")};
    animation: ${spin} 2s linear infinite;
`

export default function StyleComponentPage() {
    return (
        <div>
            <h3>Styled Component</h3>
            <Loader second></Loader>
        </div>
    )
}
