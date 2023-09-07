// Imports
import styled from "styled-components";

// Interface
interface ButtonTypes {
    outline?: boolean;
}

// Styled Components
export const ButtonS = styled.a<ButtonTypes>`
    color: ${props => props.outline ? '#1B3764' : '#fff'};
    text-align: center;
    font-family: Cardo;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.25rem; /* 288.889% */
    letter-spacing: -0.01125rem;
    text-transform: uppercase;
    background-color: ${props => props.outline ? 'white' : '#1B3764'};
    padding:  .3rem 2.5625rem .3rem 2.5625rem;
`

export const DivS = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 3rem;
`