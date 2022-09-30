import React from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
