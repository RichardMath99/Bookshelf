import React from "react";
import Image from "next/image";

//styledComponents
import { Container, DivName, DivPersons, Name, Opinion, Title } from "./style";


//Interface
interface OpinionsTypes {
    image: any;
    name: string;
    title: string;
    opinion: string;
    stars: number;
}

//Images
import martin from '../../../../public/martin.png'
import stars from '../../../../public/stars.svg'


const opinionsClients: OpinionsTypes[] = [
    {
        image: '/../../../../public/martin.png',
        name: 'Martin Philips',
        title: '“ Awesome Impact ”',
        opinion: 'All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.',
        stars: 5,
    },
    {
        image: '/../../../../public/martin.png',
        name: 'James Anderson',
        title: '“ Mind Blowing Words ”',
        opinion: 'All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.',
        stars: 5,
    },
    {
        image: '/../../../../public/martin.png',
        name: 'Christina Louis',
        title: '“ Great Books Collections ”',
        opinion: 'All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.',
        stars: 5,
    }
]

const OpinionsCard = (props: OpinionsTypes) => {
    return (
        <div>
            {opinionsClients.map((item) => {
                return (
                    <Container>
                        <DivPersons>
                            <Image
                                src={martin}
                                alt="image"
                                width={85}
                                height={85}
                            />
                            <DivName>
                                <Name>{item.name}</Name>
                                <Image
                                    src={stars}
                                    alt="stars"
                                    width={76}
                                    height={15}
                                />
                            </DivName>
                        </DivPersons>
                        <Title>{item.title}</Title>
                        <Opinion>{item.opinion}</Opinion>
                    </Container>
                )
            })}

        </div>
    )
}

export default OpinionsCard