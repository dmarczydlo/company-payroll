import styled from 'styled-components';
import { pxToRem } from 'utils/styleUtils';

export const TableStyled = styled.table`
  border-collapse: collapse;
  margin: ${pxToRem([25, 0])};
  width: ${pxToRem(700)};
  box-shadow: ${pxToRem([0, 0, 20])} rgba(0, 0, 0, 0.15);
  & th,
  td {
    padding: ${pxToRem([5, 15])};
  }
`;

export const TheadTrStyled = styled.tr`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.standard.white};
  text-align: left;
`;
