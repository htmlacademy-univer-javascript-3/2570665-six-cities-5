import { combineReducers } from '@reduxjs/toolkit';
import { currentOfferSlice } from './current/current-slice';
import { offersSlice } from './offer/offer-slice';
import { userSlice } from './user/user-slice';

export const reducer = combineReducers({
  ['Offers']: offersSlice.reducer,
  ['CurrentOffer']: currentOfferSlice.reducer,
  ['User']: userSlice.reducer,
});
