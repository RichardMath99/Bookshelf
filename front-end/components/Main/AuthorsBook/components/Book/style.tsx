import styled from "styled-components";
import Image from 'next/image';

export const ContainerBook = styled.div`
    display: flex;
    width: 38.8125rem;
    align-items: center;
`

export const BookCover = styled(Image)`
`

export const BookInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
`

export const BookTitle = styled.h3`
    margin: 0;
    color: #1B3764;
    font-family: Cardo;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
`

export const BookResume = styled.p`
    color: #969AA0;
    margin: 0;
    line-height: 180%; /* 2.1375rem */
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
`

export const BookTimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BookTime = styled.div`
    display: flex;
    gap: .7rem;
 `

export const Point = styled(Image)`
    margin-top: 2%; 
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

export const Title = styled.p`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
`

export const Description = styled.p`
    color: #969AA0;
    font-family: Inter;
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
`

export const ButtonOrder = styled.a`
    padding: 1.25rem 3.3125rem 1.3125rem 3.3125rem;
    border: 1px solid #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254,229,0,0.5);
    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
`