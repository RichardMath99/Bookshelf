import React from "react";

// Styled Components
import { Container, TitleContainer, TrustedBestContainer, TrustedSection } from "./styles";

// Components
import { Title } from "../AuthorsBook/styles";
import { LineYellow } from "../HeroSection/styles";
import TrustedItem  from "./components/index";

// Images
import amazen from '../../../public/amazen.svg';
import megan from '../../../public/megan.svg';
import losBooks from '../../../public/losBooks.svg';
import urban from '../../../public/urban.svg';

const Trusted: React.FC = () => {
    return (
        <TrustedSection>
            <Container>
                <TitleContainer>
                    <Title>Trusted by the Best</Title>
                    <LineYellow />
                </TitleContainer>
                <TrustedBestContainer>
                    <TrustedItem
                        logo={amazen}
                        title="Amazen Corp"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem
                        logo={megan}
                        title="Megan Books"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem
                        logo={losBooks}
                        title="Los Books"
                        description='A long established fact that a who looking at its layout.'
                    />
                    <TrustedItem
                        logo={urban}
                        title="Urban Lib"
                        description='A long established fact that a who looking at its layout.'
                    />
                </TrustedBestContainer>
            </Container>
        </TrustedSection>
    );
}

export default Trusted;
