import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { checkAuthorization, fetchOffers } from './store/actions.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuthorization());


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

