import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ListPages from './components/ListPages/index';
import ContactInformation from './components/ContactInformation/index';
import { FooterContainer, FooterBox, FooterColumn, CopyrightText, Title, DivIcon, ConatainerIcon, DivTitle } from './styles';
import { Container } from '../../global';

interface IconPros {
  title: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  link: string;
}

interface ItemsProps {
  text: string;
  link: string;
}

const icons: IconPros[] = [
  {
    title: 'Pages',
    iconSrc: '/svgs/facebook.svg',
    iconAlt: 'Facebook',
    iconWidth: 15,
    iconHeight: 15,
    link: 'https://www.facebook.com/'
  },
  {
    title: 'Pages',
    iconSrc: '/svgs/twitter.svg',
    iconAlt: 'Twitter',
    iconWidth: 15,
    iconHeight: 15,
    link: 'https://www.twitter.com/'
  },
  {
    title: 'Pages',
    iconSrc: '/svgs/linkedin.svg',
    iconAlt: 'Linkedin',
    iconWidth: 15,
    iconHeight: 15,
    link: 'https://www.linkedin.com/'
  },
  {
    title: 'Pages',
    iconSrc: '/svgs/instagram.svg',
    iconAlt: 'Instagram',
    iconWidth: 15,
    iconHeight: 15,
    link: 'https://www.instagram.com/'
  }
];

const items: ItemsProps[] = [
  { 
    text: 'Home', 
    link:'/' 
  },
  { 
    text: 'About Us',
    link:'/'  
  },
  { 
    text: 'Services',
    link:'/' 
  },
  { 
    text: 'Blog',
    link:'/' 
  },
  { 
    text: 'Contact Us',
    link:'/'  
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterBox>
          <FooterColumn>
            <DivTitle>
              <Image
                src='/svgs/book.svg'
                alt='Book'
                width={29}
                height={38}
                style={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Title>
                Pages
              </Title>
            </DivTitle>
            <ConatainerIcon>
              {icons.map((icon, index) => (
                <Link href={icon.link} passHref key={index} target="_blank">
                  <DivIcon>
                    <Image
                      src={icon.iconSrc}
                      alt={icon.iconAlt}
                      width={icon.iconWidth}
                      height={icon.iconHeight}
                    />
                  </DivIcon>
                </Link>
              ))}
            </ConatainerIcon>
          </FooterColumn>
          <FooterColumn>
            <ListPages items={items} title="Explore" />
          </FooterColumn>
          <FooterColumn>
            <ListPages items={items} title="Utility Pages" />
          </FooterColumn>
          <FooterColumn>
            <ContactInformation />
          </FooterColumn>
        </FooterBox>
        <CopyrightText>&copy; {new Date().getFullYear()} Bookshelf</CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
