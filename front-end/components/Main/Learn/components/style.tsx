import styled from "styled-components"

export const Content = styled.div`
    background-color: #F4F8FF;
    width: 14rem;
    height: 13.125rem;
    padding: 2.56rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Number = styled.p`
    padding: .5rem;
    background-color: #FFCA42;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Text = styled.p`
    margin: 0;
    color: #1B3764;
    font-family: Cardo, sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    letter-spacing: -0.015rem;
`

export const DivS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
`