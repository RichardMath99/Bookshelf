import { TitleDiv, TitleS, Price, DivS } from "./styles";


// Interface
interface Book{
    name: string;
    price: string;
}

const Title: React.FC<Book> = (props: Book) => {
    return (
        <DivS>
            <TitleDiv>
                <TitleS>{props.name}</TitleS>
                <Price>{props.price}</Price>
            </TitleDiv>
        </DivS>
    )
}

export default Title;