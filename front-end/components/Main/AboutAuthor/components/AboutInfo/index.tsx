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
      <InfoItem label="Country" value="United Kingdom" />
      <InfoItem label="Language" value="English" />
      <InfoItem label="Genre" value="Historiography" />
      <InfoItem label="Publication date" value="1991" />
      <InfoItem label="Share us on" value="(11) 2311-5421" />
    </InfoContainer>
  );
};

export default AboutInfo;
