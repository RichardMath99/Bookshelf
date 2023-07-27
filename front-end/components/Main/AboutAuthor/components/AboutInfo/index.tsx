import React from 'react';

// styled components
import {
    InfoBox,
    Txt,
    Title,
    Label,
    InfoContainer
  } from './styles';

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <InfoBox>
      <Label>{label}:</Label>
      <Txt>{value}</Txt>
    </InfoBox>
  );
};

const AboutInfo: React.FC = () => {
  return (
    <InfoContainer>
      <Title>Keep in Touch</Title>
      <InfoItem label="Address" value="Lorem Ipsum Street" />
      <InfoItem label="Mail" value="support@bookshelf.com" />
      <InfoItem label="Phone" value="(11) 2311-5421" />
    </InfoContainer>
  );
};

export default AboutInfo;
