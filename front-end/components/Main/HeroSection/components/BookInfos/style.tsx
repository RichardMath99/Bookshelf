import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    align-items: start;
    gap: .7rem;
`

export const Point = styled(Image)`
    margin-top: 3%;
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

export const Title = styled.p`
    color: #FFF;
    font-family: Cardo;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
`

export const Description = styled.p`
    color: #B4C7E7;
    font-family: Inter, sans-serif;;
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
`