// Import
import React from 'react'

// Styled Components
import { ButtonS, DivS } from './style';

// Functional Components
const TwoButtons: React.FC = () => {
    return(
        <DivS>
            <ButtonS >Product Description</ButtonS>
            <ButtonS outline>Additional Info</ButtonS>
        </DivS>
    )
} 

export default TwoButtons;