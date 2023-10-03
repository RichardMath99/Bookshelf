// pages/index.tsx
import React from 'react';

// Styled Components
import { Container, Description, DivS, Name } from './styles';

import Image from 'next/image';

import visit from '../../atoms/visit_us.svg'
import drop from '../../atoms/drop_us.svg'
import call from '../../atoms/call_us.svg'

const ContactC: React.FC = () => {
  return (
    <Container>
        <DivS>
            <Image alt='Visit logo' src={visit}/>
            <div>
                <Name>Visit Us</Name>
                <Description>No: 09a, Downtown, San Diego, USA</Description>
            </div>
        </DivS>
        <DivS>
            <Image alt='Visit logo' src={drop}/>
            <div>
                <Name>Drop Us</Name>
                <Description>support@pages.com</Description>
            </div>
        </DivS>
        <DivS>
            <Image alt='Visit logo' src={call}/>
            <div>
                <Name>Call Us</Name>
                <Description>Call: 1-800-123-9999</Description>
            </div>
        </DivS>
    </Container>
  );
};

export default ContactC;
