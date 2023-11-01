import Image from "next/image";
import styled from "styled-components";

export const GetBookSection = styled.div`
    background: #1B3764;
    padding: 1rem;
`

export const GetBookTexts = styled.div`
width: 35.4375rem;
display: flex;
flex-direction: column;
gap: 1.3rem;
align-items: start;
`

export const GetBookTitle = styled.h2`
    color: #FFF;
    font-family: Cardo;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 3.375rem */
    letter-spacing: -0.05625rem;
    margin: 0;
`

export const GetBookDescription = styled.p`
    color: #B4C7E7;
    font-family: Inter, sans-serif;, sans-serif;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
    margin: 0;
`

export const ImageGetBook = styled(Image)`

`

export const ButtonOrder = styled.a`
    padding: 1.25rem 3.3125rem 1.3125rem 3.3125rem;
    border: 1px solid #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254,229,0,0.5);
    color: #fff;
    text-align: center;
    font-family: Cardo;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
`
