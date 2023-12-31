import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1600px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 960px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const LineYellow = styled.span`
  display: block;
  border-bottom: 0.1rem solid #FFCA42;
  width: 3.125rem;
  height: 0.08rem;
  background: #FFCA42;
`
