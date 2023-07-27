import styled from 'styled-components';
import Link from "next/link";

export const ContainerList = styled.div`
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const LinkItem = styled(Link)`
    color: #FFF;
    text-decoration: none;
    transition: .3s;
    &:hover{ 
        filter: invert(72%) sepia(83%) saturate(389%) hue-rotate(348deg) brightness(102%) contrast(101%);
    }
`

export const Item = styled.li`
    margin-bottom: 15px;
    color: #fff;
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 24px;
    color: #fff;
    margin-top:0;
`;

