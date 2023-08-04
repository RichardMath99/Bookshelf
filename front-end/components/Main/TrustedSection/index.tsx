import React from "react";

//Styled componets
import { Container, TitleContainer, TrustedBestContainer, TrustedSection } from "./style";

//Components
import { Title } from "../AuthorsBook/style";
import { LineYellow } from "../HeroSection/style";
import { TrustedItem } from "./components";

//Images
import amazen from '../../../public/amazen.svg';
import megan from '../../../public/megan.svg';
import losBooks from '../../../public/losBooks.svg';
import urban from '../../../public/urban.svg';


const Trusted = () => {
    return (
        <TrustedSection>
            <Container>
                <TitleContainer>
                    <Title>Trusted by the Best</Title>
                    <LineYellow />
                </TitleContainer>
                <TrustedBestContainer>
                    <TrustedItem logo={amazen} title="Amazen Corp"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem logo={megan} title="Megan Books"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem logo={losBooks} title="Los Books"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem logo={urban} title="Urban Lib"
                        description='A long established fact that a who looking at its layout.'
                    />
                </TrustedBestContainer>
            </Container>
        </TrustedSection>
    )
}

export default Trusted; 
