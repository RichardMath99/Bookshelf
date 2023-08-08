import React from 'react';

// Styled Components
import { Section, Container, Button, Description, TextDescription, Span } from './styles';

// Components
import { LineYellow } from "../HeroSection/styles";
import { TitleContainer } from "../TrustedSection/styles";
import { Title } from "../AuthorsBook/styles";
import ChapterComponent from './components/index';

const Chapter: React.FC = () => {
    return (
        <Section>
            <TitleContainer>
                <Title>The Chapter Includes</Title>
                <LineYellow />
            </TitleContainer>
            <Container>
                <ChapterComponent />
                <Button href='/'>Start a 15-Days Free Trail</Button>
                <Description>
                    <TextDescription>
                        Short description about each chapter
                        <Span href='/'>Have any questions?</Span> Contact us
                    </TextDescription>
                </Description>
            </Container>
        </Section>
    );
};

export default Chapter;
