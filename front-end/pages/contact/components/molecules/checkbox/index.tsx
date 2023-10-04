// Imports
import React from 'react';

// CheckBox
import { Checkbox } from '@nextui-org/checkbox';


// Styled Components
import {  DivS, InputS, LabelS } from './styles';



const CheckBoxM: React.FC = () => {
  return (
    <DivS>
      <InputS type='checkbox'/>
      <LabelS>Keep me up to date with news and offers from time to time by email</LabelS>
    </DivS>
  );
};

export default CheckBoxM;
