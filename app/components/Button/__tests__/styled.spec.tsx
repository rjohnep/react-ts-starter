import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from '@app/theme';
import { Wrapper } from '../styled';
import { ButtonVariantsE } from '../types';

const makeButtonVariantSnap = (
  variant: ButtonVariantsE
): ReactTestRendererJSON | null => renderer.create(
  <ThemeProvider theme={theme}>
    <Wrapper variant={variant} />
  </ThemeProvider>
).toJSON();

describe('<Button />', () => {
  it('should render primary variant', () => {
    const renderedOutput = makeButtonVariantSnap(ButtonVariantsE.Primary);

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render secondary variant', () => {
    const renderedOutput = makeButtonVariantSnap(ButtonVariantsE.Secondary);

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render success variant', () => {
    const renderedOutput = makeButtonVariantSnap(ButtonVariantsE.Success);

    expect(renderedOutput).toMatchSnapshot();
  });
});
