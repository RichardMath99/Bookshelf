// pages/index.tsx
import React from 'react';

// Global components
import { Container } from '@/global';

// Organisms
import Keep from '../organisms/keep';
import Forms from '../organisms/forms';
import FrequentQuestions from '../../Frequent';

// Styled Components
import { DivS } from './styles';

const Template: React.FC = () => {
  return (
    <>
    <DivS>
        <Keep/>
        <Forms/>
    </DivS>
    <FrequentQuestions/>
    </>
  );
};

export default Template;
