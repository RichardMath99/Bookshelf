import React from 'react';

// Styled Components
import {
    BooksContainer,
    Container,
    Section,
    Title
} from './styles';

// Components
import { LineYellow } from '../HeroSection/styles';
import { Book } from './components/Book';

// Images
import book1 from '../../../public/books (2).png';
import book2 from '../../../public/books (1).png';

const AuthorsBook: React.FC = () => {
    return (
        <Section>
            <Container>
                <Title>Author’s Book Includes</Title>
                <LineYellow />
                <BooksContainer>
                    <Book
                        img={book1}
                        title='Atomic One’s'
                        resume='Many variations of passages of Lorem Ipsum willing araise  alteration in some form.'
                        pages='586 pages'
                        hours='10 Hours'
                    />
                    <Book
                        img={book2}
                        title='The Dark Light'
                        resume='Many variations of passages of Lorem Ipsum willing araise  alteration in some form.'
                        pages='586 pages'
                        hours='10 Hours'
                    />
                </BooksContainer>
            </Container>
        </Section>
    );
};

export default AuthorsBook;
