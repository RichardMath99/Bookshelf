// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// images
import logo from '../../public/Logo.svg';
import facebook from '../../public/Facebook.svg';
import twitter from '../../public/twitter.svg';
import linkedIn from '../../public/linkedIn.svg'
import cart from '../../public/cart.svg'

// styled components
import {
  HeaderS,
  IconsContainer,
  NavContainer,
  SocialContainer,
  NavLinks,
  ListLinks,
  ListItem,
  LinkItem,
  Cart,
  CartQtd,
  ButtonOrder,
  LinkSocial
} from './style';

const Header: React.FC = () => {
  return (
    <HeaderS>
      <NavContainer>
        <IconsContainer>
          <Image
            src={logo}
            alt='Logo store'
          />
          <SocialContainer>
            <LinkSocial href='/'>
              <Image
                src={facebook}
                alt='icon facebook'
              />
            </LinkSocial>
            <LinkSocial href='/'>
              <Image
                src={twitter}
                alt='icon twitter'
              />
            </LinkSocial>
            <LinkSocial href='/'>
              <Image
                src={linkedIn}
                alt='icon linkedIn'
              />
            </LinkSocial>
          </SocialContainer>
        </IconsContainer>
        <NavLinks>
          <ListLinks>
            <ListItem>
              <LinkItem href="/">
                Home
              </LinkItem>
              <LinkItem href="/">
                Pages
              </LinkItem>
              <LinkItem href="/">
                About
              </LinkItem>
              <LinkItem href="/">
                Services
              </LinkItem>
              <LinkItem href="/">
                Contact
              </LinkItem>
            </ListItem>
          </ListLinks>
          <Cart>
            <Image
            src={cart}
            alt='cart'
            />
            <CartQtd>01</CartQtd>
          </Cart>
          <ButtonOrder>
          Order Today
        </ButtonOrder>
        </NavLinks>
      </NavContainer>
    </HeaderS>
  );
};

export default Header;
