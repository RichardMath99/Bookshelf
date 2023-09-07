// Imports
import styled from "styled-components";

// Styled Components
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h3`
    color: #1B3764;
    font-family: Cardo;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 2.4rem */
    letter-spacing: -0.04rem;
    margin: 0;
`

export const Description = styled.p`
    color: #969AA0;
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
    width: 35.6875rem;
    margin: 0;
    text-align: justify;
`

export const DivS = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7rem;
`