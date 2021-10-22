import styled from 'styled-components';
import { flexFn, pxToRem } from 'utils/styleUtils';

export const WrapperStyled = styled.div`
  ${flexFn('flex-start', 'center')}
  column-gap:  ${pxToRem(10)};
  width: ${pxToRem(470)};
`;
