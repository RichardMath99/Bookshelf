import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
    padding-block: 5rem; 
`

export const DivS = styled.div`
    padding-top: 5rem;
    display: flex;
    gap: 7rem;
    align-items: center;
`

export const DivLeft = styled.div`
    width: 38.188rem;
`

export const DivRight = styled.div`
    position: relative;
`

export const ImageS = styled(Image)`
    position: absolute;
    top: -5%;
    left: -7%;
`

export const ImageBorder = styled(Image)`
    
`