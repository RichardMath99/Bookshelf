import React from 'react'

//Styled Componets
import {
    BooksContainer,
    Container,
    Section,
    Title
} from './style'

//Components
import { LineYellow } from '../HeroSection/style'
import { Book } from './components/Book'

//images
import book1 from '../../../public/books (2).png'
import book2 from '../../../public/books (1).png'


export const AuthorsBook = () => {
    return (
        <Section>
            <Container>
                <Title>Author’s Book Includes</Title>
                <LineYellow></LineYellow>
                <BooksContainer>
                    <Book
                        img={book1}
                        title='Atomic One’s'
                        resume='Many variations of passages of Lorem Ipsum willing araise  alteration in some form.'
                        pages='586pages'
                        hours='10 Hours' />
                    <Book
                        img={book2}
                        title='The Dark Light'
                        resume='Many variations of passages of Lorem Ipsum willing araise  alteration in some form.'
                        pages='586pages'
                        hours='10 Hours' />
                </BooksContainer>
            </Container>
        </Section>
    )
}