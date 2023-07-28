import React from "react";

//Styled Components
import { ButtonOrder, GetBookDescription, GetBookSection, GetBookTexts, GetBookTitle, ImageGetBook } from "./style";
import { Container } from "../AboutAuthorHome/style";
import { LineYellow } from "../HeroSection/style";

//Image
import getbook from '../../../public/getBook.png'

export const GetBook = () => {
    return (
        <GetBookSection>
            <Container>
                <GetBookTexts>
                    <GetBookTitle>
                        Get Book Copy Today!
                    </GetBookTitle>
                    <LineYellow></LineYellow>
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
    )
}