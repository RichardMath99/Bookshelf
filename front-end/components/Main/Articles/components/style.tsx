import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
    
`

export const ImageContainer = styled.div`
    
`

export const DivS = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
`

export const ImageS = styled(Image)`
    width: 25.625rem;
    height: auto;
`

export const ArticlesContent = styled.div`
    width: 22.625rem;
    height: 14.125rem;
    display: flex;
    gap: .7rem;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem;
    margin-top: -10px;
`

export const Description = styled.p`
    color: #969AA0;
    font-family: Inter, sans-serif;;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
    width: 21.6875rem;
    margin: 0;
`

export const LinkS = styled(Link)`
    color: #1B3764;
    text-align: center;
    font-family: Cardo;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.40625rem */
    letter-spacing: 0.0225rem;
`

export const BottomDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AuthorDate = styled.p`
    color: #1B3764;
    text-align: right;
    font-family: Inter, sans-serif;;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.32813rem */
`

export const Span = styled.span`
    color: #1B3764;
    text-align: right;
    font-family: Inter, sans-serif;;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.32813rem */
`