import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from 'vitest';
import { Offer } from '../../types/offer';
import { OfferCardInfo } from '../../types/offer';
import { ReviewStatus } from '../../types/enums/review-send-status';
import { Review } from '../../types/review-type';

type CurrentOfferInitialState = {
  currentOffer: Nullable<Offer>;
  nearbyOffers: OfferCardInfo[];
  currentReviews: Review[];
  reviewPostingStatus: ReviewStatus;
};

const initialState: CurrentOfferInitialState = {
  currentOffer: null,
  nearbyOffers: [],
  currentReviews: [],
  reviewPostingStatus: ReviewStatus.Success,
};

export const currentOfferSlice = createSlice({
  name: 'CurrentOffer',
  initialState,
  reducers: {
    setCurrentOffer: (
      state,
      action: PayloadAction<Nullable<Offer>>,
    ) => {
      state.currentOffer = action?.payload;
    },
    setNearbyOffers: (state, action: PayloadAction<OfferCardInfo[]>) => {
      state.nearbyOffers = action.payload;
    },
    setCurrentReviews: (state, action: PayloadAction<Review[]>) => {
      state.currentReviews = action.payload;
    },
    setReviewPostingStatus: (state, action: PayloadAction<ReviewStatus>) => {
      state.reviewPostingStatus = action.payload;
    },
  },
});

export const {
  setCurrentOffer,
  setNearbyOffers,
  setCurrentReviews,
  setReviewPostingStatus,
} = currentOfferSlice.actions;
