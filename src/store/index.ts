
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {createAPI} from '../api/api.ts';

export const axious = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefault) => getDefault({
    thunk: {
      extraArgument: axious,
    },
  }),
});
