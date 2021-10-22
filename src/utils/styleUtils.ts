import { css, FlattenSimpleInterpolation } from 'styled-components';

type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItemsType = 'center' | 'start' | 'end' | 'stretch';

type FlexDirectionType = 'row' | 'column';

export const flexFn = (
  justifyContent: JustifyContentType = 'center',
  alignItems: AlignItemsType = 'center',
  flexDirection: FlexDirectionType = 'row'
): FlattenSimpleInterpolation => {
  return css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `;
};

const trimEnd = (str: string): string => str.replace(/\s+$/, '');

export const pxToRem = (px: string | string[] | number | number[]): string => {
  let parsedPx = px as string[];
  if (!Array.isArray(px)) {
    parsedPx = [px as string];
  }
  let remResult = '';
  parsedPx.forEach((pxItem) => {
    if (pxItem === 'auto') {
      remResult += 'auto ';
      return;
    }
    const rem = parseFloat(pxItem) / 16;
    remResult += `${rem.toFixed(4)}rem `;
  });
  return trimEnd(remResult);
};
