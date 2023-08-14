// Imports
import Image from "next/image";

// Styled Componets
import { DivS, Text } from "./styles";

// Image
import dot from '../../atoms/dot.svg'

const Printed: React.FC = () => {
    return (
        <DivS>
            <Image
                src={dot}
                alt="yellow dot"
            />
            <Text>
                Printed Books
            </Text>
        </DivS>
    )
}

export default Printed;