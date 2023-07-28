import Image from "next/image";
import styled from "styled-components";

export const ContainerTrusted = styled.div`
width: 15.75rem;
height: 13.0625rem;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2.5rem;
justify-content: space-between;
`

export const BookLogo = styled(Image)`

`

export const TrusterTitle = styled.h3`
    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.8rem */
    letter-spacing: -0.015rem;
    margin: 0;
`

export const TrusterDescription = styled.p`
    margin: 0;
    flex-shrink: 0;
    color: #969AA0;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 1.9125rem */
    letter-spacing: -0.01125rem;
`