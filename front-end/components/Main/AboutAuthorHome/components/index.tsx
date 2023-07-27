import { ContainerNumbers, Number, Text, ContactInfos, AuthorName, AuthorMail, AuthorPhone } from "./style"

interface NumbersProps {
    number: string,
    text: string,
}

interface ContactProps {
    name: string,
    mail: string,
    phone: string
}

export const Numbers = (props: NumbersProps) => {
    return (
        <ContainerNumbers>
            <Number>{props.number}</Number>
            <Text>{props.text}</Text>
        </ContainerNumbers>
    )
}

export const ContactHome = (props: ContactProps) => {
    return (
        <ContactInfos>
            <AuthorName>{props.name}</AuthorName>
            <AuthorMail>{props.mail}</AuthorMail>
            <AuthorPhone>{props.phone}</AuthorPhone>
        </ContactInfos>
    )
}