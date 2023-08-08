import React from "react";
import { BookLogo, ContainerTrusted, TrusterDescription, TrusterTitle } from "./styles";

interface TrustedProps {
    logo: string;
    title: string;
    description: string;
}

const TrustedItem: React.FC<TrustedProps> = (props) => {
    return (
        <ContainerTrusted>
            <BookLogo
                src={props.logo}
                alt="Logo book"
            />
            <TrusterTitle>{props.title}</TrusterTitle>
            <TrusterDescription>{props.description}</TrusterDescription>
        </ContainerTrusted>
    );
}

export default TrustedItem;
