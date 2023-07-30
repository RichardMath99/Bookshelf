import React, { ReactNode, MouseEventHandler } from 'react';

import { Btn } from './styles';

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    className?: string;
  }
  

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <Btn className={className} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
