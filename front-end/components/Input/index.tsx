// Imports
import React, { useState } from "react";

// Styled Components
import {
    ButtonKey,
    DivS,
    InputPass,
    Key
} from "./styles";

// Interface
interface InputProps {
    type: string,
    placeholder: string,
}

// Image
import key from '../../public/svgs/key.svg'

const InputS: React.FC<InputProps> = (props: InputProps) => {
    // Variables
    const [visible, setVisible] = useState<boolean>(false)

    // Rendering
    return (
        <DivS>
            <InputPass
                placeholder={props.placeholder}
                type={visible? 'text' : props.type}
            />

            <ButtonKey onClick={() => {setVisible(!visible)}}>
                <Key
                    src={key}
                    alt="key icon"
                    width={26}
                    height={26}
                />
            </ButtonKey>
        </DivS>
    )
}

export default InputS;