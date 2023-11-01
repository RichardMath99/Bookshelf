// Imports Styled Components
import styled from "styled-components";

// Imports Next
import Image from "next/image";
import Link from "next/link";

// Styled Components

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 3.1rem;
`

export const Article = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px 5px #03030310;
    width: max-content;
`

export const ImageArticle = styled(Image)`
    object-fit: cover;
`

export const ContentArticle = styled.div`
    padding: 1rem;
`

export const TitleArticle = styled.p`
color: #1B3764;
font-family: Cardo;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 1.8rem */
letter-spacing: -0.03rem;
width: 19.1875rem;
`

export const DescriptionArticle = styled.p`
color: #969AA0;
font-family: Inter, sans-serif;;
font-size: 1.1875rem;
font-style: normal;
font-weight: 400;
line-height: 180%; /* 2.1375rem */
letter-spacing: -0.01188rem;
width: 21.6875rem;
`

export const DivS = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const DateArticle = styled.p`
    color: #1B3764;
    text-align: right;
    font-family: Inter, sans-serif;;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.32813rem */
`