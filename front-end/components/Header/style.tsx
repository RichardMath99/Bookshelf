import styled from "styled-components";
import Link from "next/link";

export const HeaderS = styled.header`
    background-color: #1B3764;
`

export const NavContainer = styled.nav`
    width: 81.188rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const SocialContainer = styled.div`
    display: flex;
    gap: .5rem;
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const ListLinks = styled.ul`
`

export const ListItem = styled.li`
    display: flex;
    gap: 2rem;
`
export const LinkItem = styled(Link)`
    color: #FFF;
    text-decoration: none;
    transition: .3s;

    &:hover{
        color: #FFCA42;
    }
`

export const LinkSocial = styled(Link)`
    transition: .3s;
    &:hover{ 
        filter: invert(72%) sepia(83%) saturate(389%) hue-rotate(348deg) brightness(102%) contrast(101%);
    }
`

export const Cart = styled.div`
    position: relative;
`

export const CartQtd = styled.p`
    position: absolute;
    font-size: .6rem;
    background-color: #FFCA42;
    padding: .2rem;
    border-radius: 50%;
    top: -60%;
    left: 60%;
`

export const ButtonOrder = styled.a`
    background-color: #FFCA42;
    padding: 0.8125rem 2.0625rem;
    color: #1B3764;
    border: 1px solid transparent;
    transition: .3s;

    &:hover{
        color:#1B3764;
        background-color: #fff;
        border: 1px solid #FFCA42;
        cursor: pointer;
    }
`