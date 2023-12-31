// pages/index.tsx
import React from 'react';

// Global components
import { Container } from '@/global';

// Molecules
import TitleC from '../../molecules/title';
import DescriptionC from '../../molecules/description';
import ContactC from '../../molecules/contact';

// Styled Components
import { DivS } from './styles';
import Image from 'next/image';

// Images
import user from '../../atoms/user.svg'
import InputM from '../../molecules/input';
import TextArea from '../../molecules/textarea';
import CheckBoxM from '../../molecules/checkbox';

const Forms: React.FC = () => {
  return (
    <Container>
        <DivS>
          <InputM placeholder='Name'/>
          <InputM placeholder='Email'/>
        </DivS>
        <InputM placeholder='Phone'/>
        <TextArea placeholder='Message'/>
        <CheckBoxM/>
    </Container>
  );
};

export default Forms;
