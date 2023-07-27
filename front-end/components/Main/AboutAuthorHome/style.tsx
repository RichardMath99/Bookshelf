import styled from "styled-components";
import Image from "next/image";

export const SectionAboutHome = styled.section`
    background-color: #F4F8FF;
    padding-bottom: 5rem;
    padding-top: 9.38rem;
`

export const Container = styled.div`
    width: 81.188rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AuthorImage = styled.div`
    position: relative;
`

export const Author = styled(Image)`
    position: absolute;
    top: -5%;
    left: -7%;
`

export const Border = styled(Image)`

`

export const AuthorResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const TitleSection = styled.h2`
    color: #1B3764;
    font-family: Cardo, sans-serif;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 3.375rem */
    letter-spacing: -0.05625rem;
    margin: 0;
`

export const DescriptionAuthor = styled.p`
    color: #969AA0;
    font-family: Inter, sans-serif;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.1375rem */
    letter-spacing: -0.01188rem;
    width: 35.4375rem;
`

export const NumbersContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const ContactContainer = styled.div`
    background: #1B3764;
    padding: 1rem;
    display: flex;
    align-items: center;
    width: max-content;
    gap: 1rem;
`

export const QrCode = styled(Image)`

`