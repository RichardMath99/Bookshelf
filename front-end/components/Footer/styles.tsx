import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1B3764;
  padding: 20px;
`;

export const FooterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const FooterColumn = styled.div`
  h4 {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h4`
  font-size: 30px;
  line-height: 37.5px;
  font-weight: 700;
  color: #fff;
`;

export const CopyrightText = styled.p`
  grid-column: 1 / span 4;
  text-align: center;
  font-size: 14px;
  color: #666;
`;
