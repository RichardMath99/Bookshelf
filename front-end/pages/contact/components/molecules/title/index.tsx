// pages/index.tsx
import { Container, LineYellow } from '@/global';
import React from 'react';
import { Title } from './styles';


const TitleC: React.FC = () => {
  return (
        <div>
            <Title>Keep in Touch</Title>
            <LineYellow/>
        </div>
  );
};

export default TitleC;