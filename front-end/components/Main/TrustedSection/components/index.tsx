import React from "react";
import { BookLogo, ContainerTrusted, TrusterDescription, TrusterTitle } from "./style";

interface TrustedProps {
    logo: any,
    title: string,
    description: string,
}

export const TrustedItem = (props: TrustedProps) => {
    return (
        <ContainerTrusted>
            <BookLogo
                src={props.logo}
                alt="Logo book"
            />
            <TrusterTitle>{props.title}</TrusterTitle>
            <TrusterDescription>{props.description}</TrusterDescription>
        </ContainerTrusted>
    )
}