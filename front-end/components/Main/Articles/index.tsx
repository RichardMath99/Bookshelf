
// Styled Components
import { TitleSection } from "../AboutAuthorHome/style";
import { LineYellow } from "../HeroSection/style";
import { Container, TitleContainer } from "../TrustedSection/style";
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