import React from 'react';
import Image from 'next/image';
import { FooterContainer, FooterBox, FooterColumn, CopyrightText, Title } from './styles';
import { Container } from '../../global';

// const columns = [
//   {
//     title: 'Pages',
//     iconSrc: '/svgs/book.svg',
//     iconAlt: 'Book',
//     iconWidth: 29,
//     iconHeight: 38,
//   },
//   {
//     title: 'Pages',
//     iconSrc: '/svgs/book.svg',
//     iconAlt: 'Book',
//     iconWidth: 29,
//     iconHeight: 38,
//   },
//   {
//     title: 'Pages',
//     iconSrc: '/svgs/book.svg',
//     iconAlt: 'Book',
//     iconWidth: 29,
//     iconHeight: 38,
//   },
//   // Adicione outras colunas aqui conforme necessário
// ];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterBox>
          <FooterColumn>
            <Title>
              <Image
                src='/svgs/book.svg'
                alt='Book'
                width={29}
                height={38}
              />
              Pages
            </Title>
          </FooterColumn>
        </FooterBox>
        <CopyrightText>&copy; {new Date().getFullYear()} Bookshelf</CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
