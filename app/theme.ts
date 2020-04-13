import baseStyled, { ThemedStyledInterface } from 'styled-components';

export enum Variants {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Success = 'Success'
}

const colors = {
  [Variants.Primary]: '#fff',
  [Variants.Secondary]: '#000',
  [Variants.Success]: '#3cb371'
};

export const theme = {
  colors
};

export type ThemeT = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeT>;
