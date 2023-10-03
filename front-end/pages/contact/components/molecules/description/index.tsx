// pages/index.tsx
import { Container, LineYellow } from '@/global';
import React from 'react';
import { Description } from './styles';


const DescriptionC: React.FC = () => {
  return (
        <div>
            <Description>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </Description>
        </div>
  );
};

export default DescriptionC;