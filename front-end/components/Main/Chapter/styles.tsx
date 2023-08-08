import Link from "next/link";
import styled from "styled-components";

export const Section = styled.section`
    background-color: #F4F8FF;
    padding-block: 5rem;
`

export const Container = styled.div`
    width: 81.188rem;
    margin-inline: auto;
`
export const Button = styled(Link)`
    text-decoration: none;
    
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    
    background: #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254,229,0,0.5);
    
    width: 27.125rem;
    margin-inline: auto;
    padding: 1.25rem 3.3125rem 1.3125rem 3.3125rem;
    border: 1px solid transparent;

    transition: .3s;

    &:hover{
    color: #1B3764;
    background-color: #fff;
    border: 1px solid #FFCA42;
    cursor: pointer;
    }
`

export const Description = styled.div`
    width: 18rem;
    margin-inline: auto;
    margin-top: 2rem;
`

export const TextDescription = styled.p`
    margin: 0;
    color: #969AA0;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 1.9125rem */
`

export const Span = styled(Link)`
    color: #1B3764;
    text-decoration-line: underline;
    display: inline-block
`