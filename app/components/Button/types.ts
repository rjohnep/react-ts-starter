import { ReactNode } from 'react';

import { Variants as ButtonVariantsE } from '@app/theme';

export { ButtonVariantsE };

export type ButtonPropsT = {
  variant?: ButtonVariantsE;
  children?: ReactNode;
};
