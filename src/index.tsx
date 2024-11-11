import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App.tsx';
import { offer } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offer}
    />
  </React.StrictMode>
);

