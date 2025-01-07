import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDispatch, State } from '../dataTypes/state';
import { OfferCardInfo } from '../dataTypes/offer';
import { setOffers } from './offer/offer-slice';
import { Offer } from '../dataTypes/offer';
import { setCurrentOffer, setCurrentReviews, setNearbyOffers, setReviewPostingStatus } from './current/current-slice';
import { Review, ReviewShortInfo } from '../dataTypes/review-type';
import { AuthorizationStatus } from '../dataTypes/enums/authorization-status';
import { ReviewStatus } from '../dataTypes/enums/review-send-status';
import { setAuthorizationStatus, setUserInfo } from './user/user-slice';
import { saveToken, dropToken } from '../api/token-helpers';
import { LoginInfo, AuthInfo } from '../dataTypes/authorization-info';
import { ApiRoute } from '../dataTypes/enums/api-routes';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCardInfo[]>(ApiRoute.Offers);
  dispatch(setOffers(data));
});

export const fetchOffer = createAsyncThunk<
  void,
  OfferCardInfo['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);
    dispatch(setCurrentOffer(data));
  } catch (err) {
    const error = err as Error | AxiosError;
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      dispatch(setCurrentOffer(undefined));
    }
  }
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  OfferCardInfo['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCardInfo[]>(`${ApiRoute.Offers}/${id}/nearby`);
  dispatch(setNearbyOffers(data));
});

export const fetchReviews = createAsyncThunk<
  void,
  OfferCardInfo['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('review/fetchReviews', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
  dispatch(setCurrentReviews(data));
});

export const postReview = createAsyncThunk<
  void,
  ReviewShortInfo,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('review/postReview', async (info, { dispatch, extra: api }) => {
  try {
    const response = await api.post(`${ApiRoute.Comments}/${info.offerId}`, {
      comment: info.comment,
      rating: info.rating,
    });
    if (response.status === 201) {
      dispatch(fetchReviews(info.offerId));
      dispatch(setReviewPostingStatus(ReviewStatus.Success));
    }
  } catch (err) {
    const error = err as Error | AxiosError;
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status !== 201
    ) {
      toast.error(
        `Error posting review ${error.response.status}`,
      );
    } else {
      toast.error('Error posting comment');
    }
    dispatch(setReviewPostingStatus(ReviewStatus.Error));
  }
});

export const login = createAsyncThunk<
  void,
  LoginInfo,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/login', async (loginInfo, { dispatch, extra: api }) => {
  try {
    const response = await api.post<AuthInfo>(ApiRoute.Login, loginInfo);
    if (response.status === 200 || response.status === 201) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
      saveToken(response.data.token);
      dispatch(setUserInfo(response.data));
    }
  } catch (err) {
    const error = err as Error | AxiosError;
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 401
    ) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
    }
  }
});

export const checkAuthorization = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/checkAuthorization', async (_arg, { dispatch, extra: api }) => {
  try {
    const response = await api.get<AuthInfo>(ApiRoute.Login);
    if (response.status === 200 || response.status === 201) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
      dispatch(setUserInfo(response.data));
    }
  } catch (err) {
    const error = err as Error | AxiosError;
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 401
    ) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
      dropToken();
    }
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
});
