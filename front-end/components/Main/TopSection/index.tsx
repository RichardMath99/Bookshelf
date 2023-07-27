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



export const TopSection = () => {
    return (
        <Section>
            <Container>
                <LeftArea>
                    <TitleContent>
                        <Title>
                        About the Author
                        </Title>
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
