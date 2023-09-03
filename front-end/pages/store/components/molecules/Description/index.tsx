import { Text } from "./styles";

// interface
interface DescriptionType{
    description: string;
}

const Description: React.FC<DescriptionType> = (props: DescriptionType) => {
    return (
        <Text>
            {props.description}
        </Text>
    )
}

export default Description;