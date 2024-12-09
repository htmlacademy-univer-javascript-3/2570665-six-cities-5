
import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers, setAuthStatus, setDataStatus } from './actions';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';
import { AuthorizationStatus } from '../DataTypes/auth-types';

type initialStateTypes ={
  city: City;
  offersList: Offer[];
  dataStatus: boolean;
  authStatus: AuthorizationStatus;
}

const initialState: initialStateTypes = {
  city: {
    title: 'Paris',
    id: '1',
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: 12
  },
  offersList: [],
  dataStatus: false,
  authStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setDataStatus, (state, action) => {
      state.dataStatus = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});

