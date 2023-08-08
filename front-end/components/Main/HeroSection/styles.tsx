import styled from 'styled-components';
import Image from 'next/image';

export const Section = styled.section`
    background-color: #1B3764;
    padding-block: 5rem;
`

export const Container = styled.div`
    width: 81.188rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftArea = styled.div`
    width: 38.375rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const RightArea = styled.div`
`

export const BookCover = styled(Image)`
`

export const WelcomeContent = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const LineYellow = styled.span`
    display: block;
    border-bottom: .1rem solid #FFCA42;
    width: 2.125rem;
    height: .05rem;
    background: #FFCA42
`

export const Welcome = styled.p`
    color: #fff;
    font-size: 1.5rem;
    font-style: italic;
`
export const TitleContent = styled.div`
`

export const Title = styled.h1`
    font-size: 4.063rem;
    margin-top: -3rem;
    color: #fff;
`

export const Description = styled.p`
    color: #fff;
    font-size: 1.188rem;
    line-height: 1.5;
    margin: 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-block: 1rem;
    align-items: center;
`

export const OrderButton = styled.a`
    padding: 1.25rem 3.3125rem;
    background-color: #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254, 229, 0, 0.5);
    color: #1B3764;
    text-decoration: none;
    font-size: 1.1875rem;
    border: 1px solid transparent;
    transition: .3s;      

    &:hover{
        color:#1B3764;
        background-color: #fff;
        border: 1px solid #FFCA42;
        cursor: pointer;
    }
`

export const ReadFree = styled.a`
    color: #fff;
    font-size: 1.1875rem;
`

export const InfosContainer = styled.div`
    display: flex;
    width: 36.25rem;
    gap: 5rem;
`