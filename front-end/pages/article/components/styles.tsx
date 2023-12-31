// Imports
import styled from "styled-components";

// Imports Next
import Image from "next/image";

// Styled Components
export const Container = styled.div`
    max-width: 81.0625rem;
    margin: 0 auto;
`

export const Banner = styled(Image)`
    object-fit: cover;
`

export const Author = styled.p`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.25rem; /* 216.667% */
    letter-spacing: -0.015rem;
`

export const Description = styled.p`
color: #969AA0;
font-family: Inter;
font-size: 1.1875rem;
font-style: normal;
font-weight: 400;
line-height: 170%; /* 2.01875rem */
letter-spacing: -0.01188rem;
width: 81.0625rem;
`

export const Title = styled.p`
color: #1B3764;
font-family: Cardo;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 2.625rem */
`