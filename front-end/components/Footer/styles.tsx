import styled from 'styled-components';
import Link from "next/link";

export const FooterContainer = styled.footer`
  background-color: #1B3764;
  padding: 20px;
`;

export const FooterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const ConatainerIcon = styled.div`
  display: flex; 
`;

export const FooterColumn = styled.div`
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const CopyrightText = styled.p`
  grid-column: 1 / span 4;
  text-align: center;
  font-size: 14px;
  color: #fff;
  margin-top: 50px;
`;

export const LinkSocial = styled(Link)`
    border: 1px solid #FFCA42;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 15px;
    height: 15px;
    margin: 5px;
    &:hover{ 
        background-color: #1B3764;
        border-color: #fff;
    }
`

