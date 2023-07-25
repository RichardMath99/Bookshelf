import React from 'react'
import { Container, Description, Point, Texts, Title } from './style'

interface BookInfos{
    name: string,
    description: string
}

//Image
import point from '../../../../../public/Point.svg'

export const Infos = (props: BookInfos) => {
    return(
        <Container>
            <Point 
            src={point} 
            alt='point yellow'
            />
            <Texts>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
            </Texts>
        </Container>
    )
}