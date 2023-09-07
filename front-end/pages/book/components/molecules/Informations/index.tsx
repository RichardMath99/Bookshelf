// Imports
import React from "react";
import Image from "next/image";

// Image
import secure from '../../atoms/SECURE (2).svg'

// Styled Components
import { DivS, SubTitle, Title } from "./styles";

// Interface
interface Icons{
    image: any;
}

// Functional Components
const Informations: React.FC<Icons> = (props: Icons) => {
    return(
        <DivS>
            <Image src={props.image} alt="icon-secure"/>
            <Title>Secure Payments</Title>
            <SubTitle>There are many variations of passages of alteration in some form.</SubTitle>
        </DivS>
    )
}

// Exports
export default Informations;