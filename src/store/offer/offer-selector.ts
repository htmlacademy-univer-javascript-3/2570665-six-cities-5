import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../dataTypes/state';
import { City } from '../../dataTypes/city';
import { OfferCardInfo } from '../../dataTypes/offer';
import { SortOffers } from '../../dataTypes/filter-type';

type OffersState = Pick<State, 'Offers'>;

export const getFavoritesOffers = (state: OffersState) => state['Offers'].favoritesOffers;
export const getCity = (state: OffersState) => state['Offers'].city;
export const getSortedOffers = createSelector(
  [
    (state: OffersState) => state['Offers'].offers,
    (state: OffersState) => state['Offers'].city,
    (state: OffersState) => state['Offers'].sorting,
  ],
  (offers: OfferCardInfo[], city: City, sort: SortOffers) =>
    sort(offers.filter((offer: OfferCardInfo) => offer.city.name === city.name)),
);
