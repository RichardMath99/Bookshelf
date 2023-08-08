import React from "react";

// Components
import { Container } from "../AboutAuthorHome/styles";
import { TitleSection } from "../AboutAuthorHome/styles";
import { LineYellow } from "../HeroSection/styles";

// Styled Components
import { TitleContainer, Description, StarsDiv, NumberStars, Overall, LeftDiv, RigthDiv, Section } from "./styles";

// Image
import stars from '../../../public/stars.svg';
import Image from "next/image";
import OpinionsCard from "./components/index";
const numberStars: string = '4.8';

const Opinions: React.FC = () => {
    return (
        <Container>
            <Section>
                <LeftDiv>
                    <TitleContainer>
                        <TitleSection>What Readers Say About the Book</TitleSection>
                        <LineYellow />
                    </TitleContainer>
                    <Description>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                    </Description>
                    {numberStars === '4.8' && (
                        <StarsDiv>
                            <Image
                                src={stars}
                                alt="stars"
                            />
                            <NumberStars>(4.8/5)</NumberStars>
                        </StarsDiv>
                    )}
                    <Overall>Overall Customer Ratings</Overall>
                </LeftDiv>
                <RigthDiv>
                    <OpinionsCard />
                </RigthDiv>
            </Section>
        </Container>
    );
}

export default Opinions;
