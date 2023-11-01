// Imports
import styled from "styled-components";

// Image
import back from './atoms/bg_404.png'

// Styled Components
export const Background = styled.div`
    background-image: url(${back.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 1124px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const ErroNumber = styled.h1`
    color: #1B3764;
    font-size: 15rem;
    text-shadow: .5rem .3rem #FFCA42;
    margin: 0;
`

export const ErroText = styled.p`
    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 3.25rem */
    letter-spacing: -0.05rem;
    margin: 0;
`

export const ErroDescription = styled.p`
    margin: 0;
    color: #969AA0;
    text-align: center;
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 2.01875rem */
    letter-spacing: -0.01188rem;
    width: 36.8125rem;
`

export const ErroButtonText = styled.p`
    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.48438rem */
    letter-spacing: 0.02375rem;
`