//React/Next Imports
import React from 'react';
import Image from 'next/image';


//InterFace

interface Book {
    img: any,
    title: string,
    resume: string,
    pages: string,
    hours: string,
}


//Styled Compoments
import { BookCover, BookInfos, BookResume, BookTime, BookTitle, ContainerBook, Point, Texts, Title, Description, BookTimeContainer, ButtonOrder } from './style';

//images
import book1 from '../../../../../public/books (2).png'
import book2 from '../../../../../public/books (1).png'
import point from '../../../../../public/Point.svg'

export const Book = (props: Book) => {
    return (
        <ContainerBook>
            <BookCover
                src={props.img}
                alt=''
            />
            <BookInfos>
                <BookTitle>{props.title}</BookTitle>
                <BookResume>{props.resume}</BookResume>
                <BookTimeContainer>
                    <BookTime>
                        <Point
                            src={point}
                            alt='point yellow'
                        />
                        <Texts>
                            <Title>Pages</Title>
                            <Description>{props.pages}</Description>
                        </Texts>
                    </BookTime>
                    <BookTime>
                        <Point
                            src={point}
                            alt='point yellow'
                        />
                        <Texts>
                            <Title>Length</Title>
                            <Description>{props.hours}</Description>
                        </Texts>
                    </BookTime>
                </BookTimeContainer>
                <ButtonOrder>Order Today</ButtonOrder>
            </BookInfos>
        </ContainerBook>
    )
}