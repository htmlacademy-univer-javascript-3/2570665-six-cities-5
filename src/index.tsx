import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app.tsx';
import { store } from './store/store.ts';

import {
  checkAuthorization,
  fetchOffers,
} from './store/actions.ts';
import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthorization());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
);
