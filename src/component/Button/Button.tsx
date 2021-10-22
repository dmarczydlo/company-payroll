import React from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProperty extends React.HTMLProps<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, onClick }: IButtonProperty) => (
  <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
);

export default Button;
