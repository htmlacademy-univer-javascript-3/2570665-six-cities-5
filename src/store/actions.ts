import {createAction} from '@reduxjs/toolkit';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../DataTypes/state.ts';
import {AxiosInstance} from 'axios';

export const changeCity = createAction<City>('changeCity');

export const fillOffers = createAction<Offer[]>('fillOffers');

export const setDataStatus = createAction<boolean>('setDataStatus');

export const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }> (
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setDataStatus(true));
      const {data} = await api.get<Offer[]>('/offers');
      dispatch(setDataStatus(false));
      dispatch(fillOffers(data));
    }
  );
