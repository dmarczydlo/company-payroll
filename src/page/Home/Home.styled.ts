import styled from 'styled-components';
import { flexFn, pxToRem } from 'utils/styleUtils';

export const WrapperStyled = styled.div`
  ${flexFn('flex-start', 'center')}
  width: ${pxToRem(300)};
`;
