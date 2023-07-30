import React from 'react'

//Styled Components
import { Section, Container, Button, Description, TextDescriotion, Span } from './style'

//Componets
import { LineYellow } from "../HeroSection/style";
import { TitleContainer } from "../TrustedSection/style";
import { Title } from "../AuthorsBook/style";
import ChapterComponent from './components';

const Chapter = () => {
    return (
        <Section>
            <TitleContainer>
                <Title>The Chapter Includes</Title>
                <LineYellow></LineYellow>
            </TitleContainer>
            <Container>
                <ChapterComponent />
                <Button href='/'>Start a 15-Days Free Trail</Button>
                <Description>
                    <TextDescriotion>
                        Short description about each chapter
                        <Span href='/'>Have any questions?</Span> Contact us
                    </TextDescriotion>
                </Description>
            </Container>
        </Section>
    )
}

export default Chapter