import { Title } from "./styles"

// Interface
interface titleProps{
    title?: string,
}

// Functional Components
const TitleS: React.FC<titleProps> = (props: titleProps) => {
    return (
        <Title>
            {props.title}
        </Title>
    )
}

export default TitleS