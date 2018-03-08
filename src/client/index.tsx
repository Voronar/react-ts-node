/**
 *
 */
import * as React from 'react';
import { hydrate } from 'react-dom';
// import { App } from 'client/components/App';

function renderApp(Component) {
  hydrate(
    <Component data={'fromClient1'}/>,
    document.getElementById('app-container'),
  );
}

// setTimeout(() => {
//   renderApp(App);
// }, 1);


if (module.hot) {
  module.hot.accept('client/components/App', async () => {
    const NewAppProvider = await import('client/components/App');
    renderApp(NewAppProvider.App);
  });
}
