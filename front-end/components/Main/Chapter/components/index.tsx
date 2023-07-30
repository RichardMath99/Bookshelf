import React from "react";

//Styled Components
import { Container, Description, DivS, DivTimes, Title, Dot, Pages, Span, Grid } from "./style";

//Interface / Types
interface ChapterTypes {
    title?: string,
    description?: string,
    pages?: string,
    lenght?: string,
}


//Content Array
const chapters: ChapterTypes[] = [
    {
        title: 'Chapter- 01   Get Started Intro',
        description: 'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
        pages: '85pages',
        lenght: '1 Hour 15 mins',
    },
    {
        title: 'Chapter- 02   Create a Massive Content',
        description: 'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
        pages: '85pages',
        lenght: '1 Hour 15 mins',
    },
    {
        title: 'Chapter- 03   Maintaining the Creative Arcs',
        description: 'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
        pages: '85pages',
        lenght: '1 Hour 15 mins',
    },
    {
        title: 'Chapter- 04   The Conclusion',
        description: 'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
        pages: '85pages',
        lenght: '1 Hour 15 mins',
    },
]

//Images
import dot from '../../../../public/Point.svg'

const ChapterComponent = (props: ChapterTypes) => {
    return (
        <Grid>
            {chapters.map((chapter, index) => {
                return (
                    <Container>
                        <Title>{chapter.title}</Title>
                        <Description>{chapter.description}</Description>
                        <DivS>
                            <DivTimes>
                                <Dot
                                    src={dot}
                                    alt=''
                                />
                                <Pages>Pages : <Span>{chapter.pages}</Span></Pages>
                            </DivTimes>
                            <DivTimes>
                                <Dot
                                    src={dot}
                                    alt=''
                                />
                                <Pages>Length : <Span>{chapter.lenght}</Span></Pages>
                            </DivTimes>
                        </DivS>
                    </Container>
                )
            })}
        </Grid>

    )
}

export default ChapterComponent;