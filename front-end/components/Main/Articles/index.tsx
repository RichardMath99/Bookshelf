
// Styled Components
import { TitleSection } from "../AboutAuthorHome/styles";
import { LineYellow } from "../HeroSection/styles";
import { Container, TitleContainer } from "../TrustedSection/styles";
import ArticlesComponent from "./components";
import { Section } from "./style";

const Articles = () => {
    return (
        <Section>
            <Container>
                <TitleContainer>
                    <TitleSection>Articles & Resources</TitleSection>
                    <LineYellow />
                </TitleContainer>
                <ArticlesComponent link="/"/>
            </Container>
        </Section>
    )
}

export default Articles;