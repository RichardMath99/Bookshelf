// pages/index.tsx
import React from 'react';

// Global components
import { Container } from '@/global';

// Molecules
import TitleC from '../../molecules/title';
import DescriptionC from '../../molecules/description';
import ContactC from '../../molecules/contact';

const Keep: React.FC = () => {
  return (
    <Container>
        <TitleC/>
        <DescriptionC/>
        <ContactC/>
    </Container>
  );
};

export default Keep;
