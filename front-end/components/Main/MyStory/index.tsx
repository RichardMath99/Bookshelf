import React from 'react';

//Styled Components
import {
    Section,
    BoxImg,
    BoxStory,
    Title,
    Description,
    TimeLine
} from './styles';

import { Container } from '../../../global';

const MyStory: React.FC = () => {
    return (
        <Section>
            <Container>
                <BoxStory>
                    <Title>

                    </Title>
                    <Description>

                    </Description>
                    <TimeLine>

                    </TimeLine>
                </BoxStory>
                <BoxImg>

                </BoxImg>
            </Container>
        </Section>
    );
};


export default MyStory;