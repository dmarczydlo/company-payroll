import styled from 'styled-components';
import { flexFn, pxToRem } from 'utils/styleUtils';

export const ButtonStyled = styled.button`
  font-size: ${pxToRem(15)};
  width: 100%;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.standard.white};
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: ${(props) => props.theme.palette.primary.blocked};
    cursor: not-allowed;
  }
`;
