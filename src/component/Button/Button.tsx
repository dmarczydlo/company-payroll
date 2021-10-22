import React from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProperty {
  title: string;
}

const Button = ({ title }: IButtonProperty) => (
  <ButtonStyled>{title}</ButtonStyled>
);

export default Button;
