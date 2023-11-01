// Imports Styled Components
import styled from "styled-components";

// Imports Next
import Image from "next/image";

// Styled Components
export const BlueDiv = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #1B3764;
    border-radius: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Text = styled.p`
    color: #FFF;
    font-family: Inter, sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 180%; /* 2.025rem */
    letter-spacing: -0.01125rem;
`

export const Ribbons = styled(Image)`
    position: absolute;
    top: 0;
    left: 5%;
`