import {createAction} from '@reduxjs/toolkit';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';


export const changeCity = createAction<City>('changeCity');

export const fillOffers = createAction<Offer[]>('fillOffers');
