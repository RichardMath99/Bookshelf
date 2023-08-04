import React from "react"
import { Author, AuthorImage, AuthorResumeContainer, Border, SectionAboutHome, TitleSection, Container, TitleContainer, DescriptionAuthor, NumbersContainer, ContactContainer, QrCode} from "./style"

//Images
import author from '../../../public/AuthorImage.png';
import border from '../../../public/BorderAuthorImage.svg';
import qrcode from '../../../public/qrCode.svg'

//Components
import { LineYellow } from "../HeroSection/style";
import { ContactHome, Numbers } from "./components";

export const AboutAuthorHome = () => {
    return (
        <SectionAboutHome>
            <Container>
                <AuthorImage>
                    <Author
                        src={author}
                        alt='image author'
                    />
                    <Border
                        src={border}
                        alt='yellow border'
                    />
                </AuthorImage>
                <AuthorResumeContainer>
                    <TitleContainer>
                        <TitleSection>About Author</TitleSection>
                        <LineYellow />
                    </TitleContainer>
                    <DescriptionAuthor>
                        All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.
                    </DescriptionAuthor>
                    <NumbersContainer>
                        <Numbers number="02" text="Books Published" />
                        <Numbers number="4.5" text="User Reviews" />
                        <Numbers number='04' text="Best Seller Awards" />
                    </NumbersContainer>
                    <ContactContainer>
                        <QrCode
                        src={qrcode}
                        alt="Qrcode"
                        />
                        <ContactHome
                        name="John Abraham , Ph.d"
                        mail="Mail : johnabraham@gmail.com"
                        phone="Phone: (+2) 123 545 9000"
                        />
                    </ContactContainer>
                </AuthorResumeContainer>
            </Container>
        </SectionAboutHome>
    )
}