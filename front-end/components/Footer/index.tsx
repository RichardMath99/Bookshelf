// components/Footer.tsx
import React from 'react';
import { FooterContainer, CopyrightText } from './style';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CopyrightText>&copy; {new Date().getFullYear()} Bookshelf</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;