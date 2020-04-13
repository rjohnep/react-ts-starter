import styled, { css } from 'styled-components';

import { ButtonVariantsE } from './types';

const primaryStyle = css`
  color: ${(props) => props.theme.colors[ButtonVariantsE.Primary]};
  background: ${(props) => props.theme.colors[ButtonVariantsE.Secondary]};
`;

const secondaryStyle = css`
  color: ${(props) => props.theme.colors[ButtonVariantsE.Secondary]};
  background: ${(props) => props.theme.colors[ButtonVariantsE.Primary]};
`;

const successStyle = css`
  color: ${(props) => props.theme.colors[ButtonVariantsE.Success]};
  background: ${(props) => props.theme.colors[ButtonVariantsE.Secondary]};
`;

export const Wrapper = styled.div<{ variant: ButtonVariantsE }>`
  ${({ variant }) => {
    switch (variant) {
      case ButtonVariantsE.Secondary:
        return secondaryStyle;
      case ButtonVariantsE.Success:
        return successStyle;
      case ButtonVariantsE.Primary:
      default:
        return primaryStyle;
    }
  }};

  border-radius: 4px;
`;
