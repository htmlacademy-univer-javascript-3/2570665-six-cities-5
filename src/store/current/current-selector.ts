import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../dataTypes/state';
import { MAX_NEARBY_OFFERS } from '../../consts/offer';
import { OfferCardInfo } from '../../dataTypes/offer';
import { Review } from '../../dataTypes/review-type';


type CurrentOfferState = Pick<State, 'CurrentOffer'>;

export const getCurrentOffer = (state: CurrentOfferState) =>
  state['CurrentOffer'].currentOffer;
export const getNearbyOffers = createSelector(
  [(state: CurrentOfferState) => state['CurrentOffer'].nearbyOffers],
  (offers: OfferCardInfo[]) => offers.slice(0, MAX_NEARBY_OFFERS),
);
export const getCurrentReviews = (state: CurrentOfferState) =>
  state['CurrentOffer'].currentReviews;

export const getReviewsCount = createSelector(
  [(state: CurrentOfferState) => state['CurrentOffer'].currentReviews],
  (reviews: Review[]) => reviews.length,
);
export const getReviewPostingStatus = (state: CurrentOfferState) =>
  state['CurrentOffer'].reviewPostingStatus;
