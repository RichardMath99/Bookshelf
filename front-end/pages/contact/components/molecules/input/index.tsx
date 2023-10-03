// pages/index.tsx
import React from 'react';

// Global components
import { Container } from '@/global';

// Molecules
import TitleC from '../../molecules/title';
import DescriptionC from '../../molecules/description';
import ContactC from '../../molecules/contact';

// Styled Components
import { DivS, InputS } from './styles';
import Image from 'next/image';

// Images
import user from '../../atoms/user.svg'

// Interface
interface InputTypes{
    placeholder: string,
}

const InputM: React.FC<InputTypes> = (props: InputTypes) => {
  return (
    <Container>
        <DivS>
          <Image alt='user' src={user}/>
          <InputS placeholder={props.placeholder}/>
        </DivS>
    </Container>
  );
};

export default InputM;
