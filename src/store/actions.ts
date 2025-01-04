import {createAction} from '@reduxjs/toolkit';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offer-type';


export const changeCity = createAction<City>('changeCity');

export const fillOffers = createAction<Offer[]>('fillOffers');

export const sorting = createAction<(offers: Offer[]) => Offer[]>('sorting');
