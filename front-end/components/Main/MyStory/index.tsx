import React from 'react';
import Image from 'next/image';
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
                        My Story
                    </Title>
                    <Description>
                        Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.
                    </Description>
                    <TimeLine>

                    </TimeLine>
                </BoxStory>
                <BoxImg>
                    <Image
                        src='/image/mystory.png'
                        alt='Book'
                        width={29}
                        height={38}
                        style={{ marginRight: '5px', marginLeft: '5px' }}
                    />
                </BoxImg>
            </Container>
        </Section>
    );
};


export default MyStory;