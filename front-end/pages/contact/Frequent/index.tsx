// pages/index.tsx
import React, { useState } from 'react';

// Global Components
import { Container, LineYellow } from '@/global';
import { Title } from '@/components/Main/AuthorsBook/style';

// Styled Components
import { AccordionContainer, AccordionContent, AccordionDiv, AccordionHeader, AccordionQuestion, Background, DivS } from './styles';

// Interface
interface AccordionProps {
    title: string,
    response: string,
    index: number,
}

// Data
const questions: AccordionProps[] = [
    {
        title: 'Do you offer discounts for education?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 1
    },
    {
        title: 'Is Hack Producivity book available on the one stores?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 2
    },
    {
        title: 'What is Hack Productivity book about?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 3
    },
    {
        title: 'Where can I get Hack Productivity book?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 4
    },
    {
        title: 'Do you offer discounts for education?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 5
    },
    {
        title: 'Do you offer discounts for education?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 6
    },
    {
        title: 'Is Hack Producivity book available on the one stores?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 7
    },
    {
        title: 'What is Hack Productivity book about?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 8
    },
    {
        title: 'Where can I get Hack Productivity book?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 9
    },
    {
        title: 'Do you offer discounts for education?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur cum deserunt dicta omnis molestias. Quibusdam vitae magni aliquid reiciendis.',
        index: 10
    },
]

// Functional Components
const FrequentQuestions: React.FC<AccordionProps> = ({ title, response }) => {
    // Variables
    const [isOpen, setIsOpen] = useState<any>(null);

    // Rendering
    return (
        <Background>
            <Container>
                <DivS>
                    <Title>Author’s Book Includes</Title>
                    <LineYellow />
                </DivS>
                <AccordionContainer>
                    {questions.map((question, index) => {
                        return (
                            <AccordionDiv>
                                <AccordionHeader onClick={() => {
                                    setIsOpen(question.index)
                                }}>
                                    <AccordionQuestion>{question.title}</AccordionQuestion>
                                </AccordionHeader>
                                <AccordionContent isOpen={isOpen === question.index}>{question.response}</AccordionContent>
                            </AccordionDiv>
                        )
                    })}

                </AccordionContainer>
            </Container>
        </Background>
    );
};

export default FrequentQuestions;
