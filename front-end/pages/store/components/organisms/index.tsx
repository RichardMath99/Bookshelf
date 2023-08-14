import Description from "../molecules/Description";
import Printed from "../molecules/Printed";
import Title from "../molecules/Title";
import { Container } from "./styles";

const Organisms: React.FC = () => {
    return (
        <Container>
            <Title />
            <Description/>
            <Printed/>
        </Container>
    )
}

export default Organisms;