import Description from "../molecules/Description";
import Printed from "../molecules/Printed";
import Title from "../molecules/Title";
import { Container, Content } from "./styles";

// Interface
interface InfosBookType {
    name: string,
    price: string,
    description: string,
}

const infosBook: InfosBookType[] = [
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
    {
        name: 'Atomic One’s',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
    },
]


const Organisms: React.FC<InfosBookType> = (props: InfosBookType) => {
    return (
        <Container>
            {infosBook.map((item, index) => {
                return (
                    <Content>
                        <Title
                            name={item.name}
                            price={item.price} />
                        <Description
                            description={item.description}
                        />
                        <Printed />
                    </Content>
                )
            })}

        </Container>
    )
}

export default Organisms;