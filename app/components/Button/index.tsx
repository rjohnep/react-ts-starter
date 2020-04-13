import React, { FC } from 'react';

import { Wrapper } from './styled';
import { ButtonPropsT, ButtonVariantsE } from './types';

export const Button: FC = (
  { variant = ButtonVariantsE.Primary, ...props }: ButtonPropsT
) => (
  <Wrapper variant={variant}>{props.children}</Wrapper>
);
