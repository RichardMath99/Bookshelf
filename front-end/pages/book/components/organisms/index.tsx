// Imports
import React from 'react'
import Image from 'next/image';


// Styled Components
import { Container, RightDiv } from "./style";

// Molecules
import Title from '../molecules/Title/'
import Description from "../molecules/Description";
import InfosBook from '../molecules/Infos';
import ButtonBuy from '../molecules/Button';

// Interface
interface InfosBookType {

}

// Data
const infosBook: InfosBookType[] = [

]

// Image
import book from '../atoms/Book.jpg'

const Organisms: React.FC = () => {
    // Rendering
    return (
        <Container>
            <Image src={book} alt='book'/>
            <RightDiv>
                <Title name="The Atomic One’s" price="$30.00 USD" />
                <Description description="Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum." />
                <InfosBook
                publisher='Learning Private Limited (1 January 2021)'
                language='English'
                paperback='212 pages'
                isbn={9788120345799}
                dimensions='20 x 14 x 4 cm'
                />
                <ButtonBuy/>
            </RightDiv>
        </Container>
    )
}

export default Organisms;