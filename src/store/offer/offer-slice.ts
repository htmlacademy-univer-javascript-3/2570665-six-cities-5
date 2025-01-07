
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PARIS } from '../../consts/city';
import { City } from '../../types/city';
import { OfferCardInfo } from '../../types/offer';
import { SortOffers } from '../../types/filter-type';

type OffersInitialState = {
  city: City;
  offers: OfferCardInfo[];
  sorting: SortOffers;
  favoritesOffers: OfferCardInfo[];
};

const initialState: OffersInitialState = {
  city: PARIS,
  offers: [],
  sorting: (offers: OfferCardInfo[]) => offers,
  favoritesOffers: [],
};

export const offersSlice = createSlice({
  name: 'Offers',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferCardInfo[]>) => {
      state.offers = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortOffers>) => {
      state.sorting = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<OfferCardInfo[]>) => {
      state.favoritesOffers = action.payload;
    },
  },
});

export const { changeCity, setOffers, setSorting, setFavoriteOffers} = offersSlice.actions;
