import React from 'react';

// styled components
import {
    ContactBox,
    Txt,
    Title,
    Label,
    ContactContainer
  } from './styles';

interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value }) => {
  return (
    <ContactBox>
      <Label>{label}:</Label>
      <Txt>{value}</Txt>
    </ContactBox>
  );
};

const ContactInformation: React.FC = () => {
  return (
    <ContactContainer>
      <Title>Keep in Touch</Title>
      <ContactItem label="Address" value="Lorem Ipsum Street" />
      <ContactItem label="Mail" value="support@bookshelf.com" />
      <ContactItem label="Phone" value="(11) 2311-5421" />
    </ContactContainer>
  );
};

export default ContactInformation;
