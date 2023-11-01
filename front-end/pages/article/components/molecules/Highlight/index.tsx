// Imports
import React from "react";

// Styled Components
import { BlueDiv, Ribbons, Text } from "./styles";

// Interface
interface propsHighlight{
    text : string,
}

// Images
import ribbons from '../../atoms/ribbons.svg'

// Functional Component
const Highlight: React.FC<propsHighlight> = (props: propsHighlight) =>{
    // Rendering
    return(
        <BlueDiv>
            <Text>{props.text}</Text>
            <Ribbons src={ribbons} alt="ribbons image" width={61} height={30}/>
        </BlueDiv>
    )
}

// Export
export default Highlight;