import React from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, onClick }: IButtonProps) => (
  <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
);

export default Button;
