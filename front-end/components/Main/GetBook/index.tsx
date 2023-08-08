import React from "react";

// Styled Components
import { ButtonOrder, GetBookDescription, GetBookSection, GetBookTexts, GetBookTitle, ImageGetBook } from "./styles";
import { Container } from "../AboutAuthorHome/styles";
import { LineYellow } from "../HeroSection/styles";

// Image
import getbook from '../../../public/getBook.png';

const GetBook: React.FC = () => {
    return (
        <GetBookSection>
            <Container>
                <GetBookTexts>
                    <GetBookTitle>
                        Get Book Copy Today!
                    </GetBookTitle>
                    <LineYellow />
                    <GetBookDescription>
                        This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.
                    </GetBookDescription>
                    <ButtonOrder href="/">Order Today</ButtonOrder>
                </GetBookTexts>
                <ImageGetBook
                    src={getbook}
                    alt=""
                />
            </Container>
        </GetBookSection>
    );
}

export default GetBook;
