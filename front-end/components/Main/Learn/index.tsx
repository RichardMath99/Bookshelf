import React from "react";

//Styled Components
import { DivLeft, DivRight, DivS, Section, ImageS, ImageBorder } from "./style";

//Images
import learn from '../../../public/learn_img.png'
import border from '../../../public/BorderAuthorImage.svg'

//Components
import { Title } from "../AuthorsBook/style";
import { Container, LineYellow } from "../HeroSection/style";
import { TitleContainer } from "../TrustedSection/style";
import Component from "./components";

const Learn = () => {
    return (
        <Section>
            <TitleContainer>
                <Title>Trusted by the Best</Title>
                <LineYellow />
            </TitleContainer>
            <Container>
                <DivS>
                    <DivLeft>
                        <Component />
                    </DivLeft>
                    <DivRight>
                        <ImageS
                            src={learn}
                            alt='Image learn'
                        />
                        <ImageBorder
                            src={border}
                            alt='Image learn'
                        />
                    </DivRight>
                </DivS>
            </Container>
        </Section>
    )
}

export default Learn;