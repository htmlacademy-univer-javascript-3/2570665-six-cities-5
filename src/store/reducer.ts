
import { offer } from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './actions';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';

type initialStateTypes ={
  city: City;
  offersList: Offer[];
}

const initialState: initialStateTypes = {
  city: {
    title: 'Paris',
    id: '1',
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: 12
  },
  offersList: offer
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = action.payload;
    });
});

