// Imports
import styled from "styled-components";

// Styled Components
export const Container = styled.div`
    display: flex;
    gap: 1rem;
`

export const Qtd = styled.p`
color: #969AA0;
font-family: Inter, sans-serif;;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 1.75rem */
letter-spacing: -0.0125rem;
margin: 0;

border: 1px solid #FFCA42;
width: 7.5rem;
height: 4.0625rem;
flex-shrink: 0;

display: flex;
align-items: center;
justify-content: center;
`

export const AddCart = styled.button`
    display: flex;
    padding: 1.25rem 7.4375rem 1.3125rem 7.4375rem;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    background: #FFCA42;
    border: none;

    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.48438rem */
    letter-spacing: 0.02375rem;
`