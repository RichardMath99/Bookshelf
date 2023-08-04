import React from "react";

//Components
import { Container } from "../AboutAuthorHome/style";
import { TitleSection } from "../AboutAuthorHome/style";
import { LineYellow } from "../HeroSection/style";

//StyledComponents
import { TitleContainer, Description, StarsDiv, NumberStars, Overall, LeftDiv, RigthDiv, Section } from "./style";

//Image
import stars from '../../../public/stars.svg'
import Image from "next/image";
import OpinionsCard from "./components";

const numberStars: string = '4.8'
const Opinions = () => {
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
                    <OpinionsCard/>
                </RigthDiv>
            </Section>
        </Container>
    )
}

export default Opinions