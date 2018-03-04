/**
 *
 */
import { App } from 'client/components/App';

console.log(App(1));

if (module.hot) {
  module.hot.accept('client/components/App', async () => {
    const NewAppProvider = await import('client/components/App');
    console.log(NewAppProvider.App(1));
  });
}
