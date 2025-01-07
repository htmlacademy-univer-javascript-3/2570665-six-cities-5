import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.ts';
import {
  checkAuthorization,
  fetchFavoriteOffers,
  fetchOffers,
} from './store/actions.ts';
import { ToastContainer } from 'react-toastify';
import { App } from './components/app-component.tsx';


store.dispatch(checkAuthorization());
store.dispatch(fetchOffers());
store.dispatch(fetchFavoriteOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
);
