import { ContainerNumbers, Number, Text } from "./style"

interface NumbersProps{
    number: string,
    text: string,
}

export const Numbers = (props: NumbersProps) => {
    return(
        <ContainerNumbers>
            <Number>{props.number}</Number>
            <Text>{props.text}</Text>
        </ContainerNumbers>
    )
}