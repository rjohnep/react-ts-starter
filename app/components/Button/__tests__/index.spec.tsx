import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Button } from '../index';

const renderer = ShallowRenderer.createRenderer();

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Button />);

    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
