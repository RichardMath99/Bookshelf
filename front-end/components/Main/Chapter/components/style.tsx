import styled from "styled-components";
import Image from "next/image";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
    padding-block: 3rem;
`

export const Container = styled.div`
    background-color: #fff;
    width: 35.375rem;
    height: 11.625rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Title = styled.h4`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.8rem */
    letter-spacing: -0.03rem;
    margin: 0;
`

export const Description = styled.p`
    margin: 0;
    color: #969AA0;
    font-family: Inter, sans-serif;;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
`

export const DivS = styled.div`
    display: flex;
    gap: 3rem;
`

export const DivTimes = styled.div`
    display: flex;
    align-items: center; 
    gap: .6rem;
`

export const Dot = styled(Image)`
    margin-top: -.5%;
`

export const Pages = styled.p`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.65rem */
    letter-spacing: -0.01375rem;
    margin: 0;
`

export const Span = styled.span`
    color: #969AA0;
    font-family: Inter, sans-serif;, sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 1.9125rem */
    letter-spacing: -0.01125rem;
    margin: 0;
`

