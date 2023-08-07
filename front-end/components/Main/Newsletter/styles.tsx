import styled from 'styled-components';

export const Title = styled.h2`
    color: #1B3764;
    text-align: left;
    font-family: Cardo;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 10px;
`

export const Description = styled.p`
    color: #969AA0;
    margin: 0;
    line-height: 180%; /* 2.1375rem */
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
`

export const NewsletterSection = styled.div`
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const NewsletterButton = styled.button`
   background-color: #FFCA42;
    box-shadow: 0 5px 20px -2px rgba(254, 229, 0, 0.5);
    padding: 0.8125rem 2.0625rem;
    color: #1B3764;
    border: 1px solid transparent;
    transition: .3s;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 85px;

    &:hover{
        color:#1B3764;
        background-color: #fff;
        border: 1px solid #FFCA42;
        cursor: pointer;
    }
`;