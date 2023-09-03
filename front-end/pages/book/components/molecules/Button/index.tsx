// Imports
import React from 'react'


// Styled Components
import { AddCart, Container, Qtd } from "./style";

// Image
import cart from '../../atoms/cart-icon.svg'
import Image from 'next/image';

const ButtonBuy: React.FC = () => {
    return(
        <Container>
            <Qtd>1</Qtd>
            <AddCart>
                <Image alt='carrinho' src={cart}/>
                Add to Cart
            </AddCart>
        </Container>
    )
}

export default ButtonBuy;
