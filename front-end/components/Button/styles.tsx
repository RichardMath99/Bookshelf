import styled from "styled-components";

export const Btn = styled.a`
    background-color: #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254, 229, 0, 0.5);
    padding: 0.8125rem 2.0625rem;
    color: #1B3764;
    border: 1px solid transparent;
    transition: .3s;
    display: flex;
    justify-content:center;
    align-items: center;
    width: max-content;

    &:hover{
        color:#1B3764;
        background-color: #fff;
        border: 1px solid #FFCA42;
        cursor: pointer;
    }
`