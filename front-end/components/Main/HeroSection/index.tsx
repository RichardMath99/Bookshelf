import React from 'react';

// Styled Components
import {
    BookCover,
    ButtonsContainer,
    Container,
    Description,
    InfosContainer,
    LeftArea,
    LineYellow,
    OrderButton,
    ReadFree,
    RightArea,
    Section,
    Title,
    TitleContent,
    Welcome,
    WelcomeContent
} from './styles';

// Images
import book from '../../../public/book.png';

// Components
import { Infos } from './components/BookInfos';

const HeroSection: React.FC = () => {
    return (
        <Section>
            <Container>
                <LeftArea>
                    <WelcomeContent>
                        <LineYellow />
                        <Welcome>Welcome to Pages</Welcome>
                    </WelcomeContent>
                    <TitleContent>
                        <Title>
                            Books are uniquely portable magic
                        </Title>
                        <Description>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </Description>
                    </TitleContent>
                    <ButtonsContainer>
                        <OrderButton href='/'>
                            Order Today
                        </OrderButton>
                        <ReadFree href='/'>
                            Read Free Demo
                        </ReadFree>
                    </ButtonsContainer>
                    <InfosContainer>
                        <Infos name='Pages:' description='586 pages' />
                        <Infos name='Length:' description='10 Hours' />
                        <Infos name='Ratings:' description='4.5/5 (305 ratings)' />
                    </InfosContainer>
                </LeftArea>
                <RightArea>
                    <BookCover
                        src={book}
                        alt='Book cover'
                    />
                </RightArea>
            </Container>
        </Section>
    );
}

export default HeroSection;
