import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './containers/App';
import { theme } from './theme';

const MOUNT_NODE = document.getElementById('app');

const render = (): void => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/App'], () => {
    if (MOUNT_NODE) ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
