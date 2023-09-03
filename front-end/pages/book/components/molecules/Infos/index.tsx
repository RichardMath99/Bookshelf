// Imports
import React from 'react'

// Styled Components
import {Container, DivS, Text, Title } from "./styles";

// Interface
interface Book{
    publisher: string,
    language: string,
    paperback: string,
    isbn: number,
    dimensions: string,
}

const InfosBook: React.FC<Book> = (props: Book) => {
    return (
        <Container>
            <DivS>
                <Title>Publisher :</Title>
                <Text>{props.publisher}</Text>
            </DivS>
            <DivS>
                <Title>Language :</Title>
                <Text>{props.language}</Text>
            </DivS>
            <DivS>
                <Title>Paperback :</Title>
                <Text>{props.paperback}</Text>
            </DivS>
            <DivS>
                <Title>ISBN-10 :</Title>
                <Text>{props.isbn}</Text>
            </DivS>
            <DivS>
                <Title>Dimensions :</Title>
                <Text>{props.dimensions}</Text>
            </DivS>
        </Container>
    )
}

export default InfosBook;