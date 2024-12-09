import {createAction} from '@reduxjs/toolkit';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../DataTypes/state.ts';
import {AxiosInstance} from 'axios';
import { AuthorizationStatus } from '../DataTypes/auth-types.tsx';
import { AuthInfo, LoginInfo } from '../DataTypes/user.ts';

export const changeCity = createAction<City>('changeCity');

export const fillOffers = createAction<Offer[]>('fillOffers');

export const setDataStatus = createAction<boolean>('setDataStatus');

export const setAuthStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');

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

export const login = createAsyncThunk<
  void,
  LoginInfo,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/login', async (loginInfo, { dispatch, extra: api }) => {
  const response = await api.post<AuthInfo>('/login', loginInfo);
  if (response.status === 200 || response.status === 201) {
    dispatch(setAuthStatus(AuthorizationStatus.Authorized));
    localStorage.setItem('six-cities-token', response.data.token);
  } else {
    throw response;
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete('/logout');
  dispatch(setAuthStatus(AuthorizationStatus.Unauthorized));
});

export const checkAuthorization = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/checkAuthorization', async (_arg, { dispatch, extra: api }) => {
  await api.get('/login');
  dispatch(setAuthStatus(AuthorizationStatus.Authorized));
});
