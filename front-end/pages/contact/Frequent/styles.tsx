// Imports
import styled from "styled-components";

// Styled Components
export const Background = styled.div`
    background-color: #F5F8FC;
    padding-block: 7rem;
`

export const DivS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const AccordionContainer = styled.div`
  border-radius: 4px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  width: 75rem;
  margin: 0 auto;
`;

export const AccordionQuestion = styled.h4`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.25rem; /* 216.667% */
    letter-spacing: -0.015rem;
    margin: 0;
`

export const AccordionHeader = styled.div`
    padding: .5rem;
    cursor: pointer;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
    display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'block' : 'none')};
    padding: 0px 10px 20px;
    max-width: 38.1875rem;
    text-align: justify;
    color: #969AA0;
    font-family: Inter;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
`;

export const AccordionDiv = styled.div`
    border-bottom: 1px solid #1B3764;
`