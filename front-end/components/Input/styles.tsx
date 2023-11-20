// Imports
import Image from "next/image";
import styled from "styled-components";

// Styled Components
export const DivS = styled.div`
    position: relative;
`

export const InputPass = styled.input`
    width: 37.875rem;
    border: 1px solid #DCE1E9;
    outline: none;
    height: 3rem;
    padding-left: 3rem;

    &::placeholder{
        color: #969AA0;
        font-family: Inter;
        font-size: 1.1875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 2.1375rem */
        letter-spacing: -0.01188rem;
    }
`
export const ButtonKey = styled.button`
    border: none;
    background-color: transparent;
`

export const Key = styled(Image)`
    position: absolute;
    top: 20%;
    left: 2%;
    ` 