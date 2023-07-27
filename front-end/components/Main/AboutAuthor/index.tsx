import React from 'react';
import Image from 'next/image';

//Components
import AboutInfo from "./components/AboutInfo";

//Styled Components
import {
    Section,
    Container,
    BoxImg,
    BoxAbout,
    BoxInfo,
    Title,
    Txt,
    About
} from './styles';

const AboutAuthor: React.FC = () => {
  return (
    <Section>
      <Container>
        <BoxImg>
          <Image
              src='/imagens/author.png'
              alt='Author'
              width={1132}
              height={600}
              />
        </BoxImg>
        <About>
          <BoxInfo>
            <AboutInfo />
          </BoxInfo>
          <BoxAbout>
              <Title>About Dr. John Abraham </Title>
              <Txt>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</Txt>
          </BoxAbout>
        </About>
      </Container>
    </Section>
  );
};

export default AboutAuthor;
