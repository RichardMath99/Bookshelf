import styled from "styled-components";
import Link from "next/link";

export const Content = styled.div`
    width: 25.0625rem;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 1200px;
    margin: 0 auto;
    padding-block: 5rem;
`

export const BookLink = styled(Link)`
    text-decoration: none;
`