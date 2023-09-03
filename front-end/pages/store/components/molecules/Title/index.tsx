import { TitleDiv, TitleS, Price, DivS, ImageBook } from "./styles";
import Image from "next/image";

// Image
import book from '../../atoms/atomic-book.png'

// Interface
interface Book{
    name: string;
    price: string;
}

const Title: React.FC<Book> = (props: Book) => {
    return (
        <DivS>
            <ImageBook
                src={book}
                alt="book"
                width={292}
                height={396}
            />
            <TitleDiv>
                <TitleS>{props.name}</TitleS>
                <Price>{props.price}</Price>
            </TitleDiv>
        </DivS>
    )
}

export default Title;