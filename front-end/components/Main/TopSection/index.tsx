//Imports from React 
import React from 'react';

//Styled Components
import {
    Container,
    Description,
    LeftArea,
    Section,
    Title,
    TitleContent
} from './styles';


import { LineYellow } from "../HeroSection/style";

interface TopSectionType {
    title: string
}


export const TopSection = (props: TopSectionType) => {
    return (
        <Section>
            <Container>
                <LeftArea>
                    <TitleContent>
                        <Title>
                            {props.title}
                        </Title>
                        <LineYellow />
                        <Description>
                            There are many variations of passages of Lorem Ipsum available, but the majority have <br/> suffered alteration in some form.
                        </Description>
                    </TitleContent>
                </LeftArea>
            </Container>
        </Section>
    )
}

export default TopSection;
