import React from 'react';
import Image from 'next/image';

//Components
import AboutInfo from "./components/AboutInfo";
import Button from "../../Button";

//Styled Components
import {
    Section,
    BoxImg,
    BoxAbout,
    BoxInfo,
    Title,
    Txt,
    About,
    BoxTxt
} from './styles';

import { Container } from '../../../global';

const AboutAuthor: React.FC = () => {
  return (
    <Section>
      <Container>
        <BoxImg>
          <Image
              src='/imagens/author.png'
              alt='Author'
              width={300} // Set your desired width here
              height={200}
              style={{width: '100%', height: 'auto'}}
              />
        </BoxImg>
        <About>
          <BoxInfo>
            <AboutInfo />
          </BoxInfo>
          <BoxAbout>
              <BoxTxt>
                <Title>About Dr. John Abraham </Title>
                <Txt>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures, all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. </Txt>
                <Txt>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</Txt>
              </BoxTxt>
              <Button> 
                Contact now
              </Button>
          </BoxAbout>
        </About>
      </Container>
    </Section>
  );
};

export default AboutAuthor;
