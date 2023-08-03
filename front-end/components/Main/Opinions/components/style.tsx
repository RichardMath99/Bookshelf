import styled from "styled-components";
import Image from "next/image";

export const DivS = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    width: 20.125rem;
    height: 18.3125rem;
    padding: 2.25rem 1.9375rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    background: #1B3764;

    &:nth-child(3){
        position: absolute;
        bottom: 25%;
        left: 110%;
    }
`

export const DivPersons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const Name = styled.h3`
    color: #FFF;
    font-family: Cardo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.8rem */
    letter-spacing: -0.03rem;
    margin: 0;
`
export const DivName = styled.div`
    gap: .3rem;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
    color: #FFF;
    font-family: Cardo;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.65rem */
    letter-spacing: -0.01375rem;
    margin-bottom: 0;
`

export const Opinion = styled.p`
    color: #B4C7E7;
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
    width: 18rem;
    text-align: justify;
`