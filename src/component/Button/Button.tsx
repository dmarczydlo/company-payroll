import React from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
}

const Button = ({ title, onClick, disabled = false }: IButtonProps) => (
  <ButtonStyled disabled={disabled} onClick={onClick}>
    {title}
  </ButtonStyled>
);

export default Button;
