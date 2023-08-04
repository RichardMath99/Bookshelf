import React from 'react';
import Image from 'next/image';
//Styled Components
import {
    Section,
    BoxImg,
    BoxStory,
    Title,
    Description,
    BoxMyStory
} from './styles';

import Timeline from './components/Timeline';

const timelineItems = [
  { title: 'Great Author Awards - 1996 & 2000', description: 'How to navigate around the interface and toggle on/off the panels you wish to use.' },
  { title: '10 Times New York Times ® Best Seller', description: 'How to navigate around the interface and toggle on/off the panels you wish to use.' },
  { title: 'Writer of Hack Productivity', description: 'How to navigate around the interface and toggle on/off the panels you wish to use.' },
];


import { Container } from '../../../global';
import { LineYellow } from '../../../global';

const MyStory: React.FC = () => {
    return (
        <Section>
            <Container>
                <BoxMyStory>
                    <BoxStory>
                        <Title>
                            My Story
                        </Title>
                        <LineYellow />
                        <Description>
                            Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.
                        </Description>
                        <Timeline items={timelineItems} />
                    </BoxStory>
                    <BoxImg>
                        <Image
                            src='/imagens/mystory.png'
                            alt='Book'
                            width={600}
                            height={650}
                            style={{ marginRight: '5px', marginLeft: '5px' }}
                        />
                    </BoxImg>
                </BoxMyStory>
            </Container>
        </Section>
    );
};


export default MyStory;