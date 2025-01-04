import { offer } from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers, sorting } from './actions';
import { Offer } from '../DataTypes/offer-type';
import { Cities } from '../mocks/cities';


const initialState = {
  city: Cities[0],
  offersList: offer,
  sorting: (offers: Offer[]) => offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(sorting, (state, action) => {
      state.sorting = action.payload;
    });
});
