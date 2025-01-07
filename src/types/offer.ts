import { City } from './city.ts';
import { User } from './user.ts';
import { Location } from './location.ts';
import { PlaceType } from './enums/place.tsx';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type OfferCardInfo = {
  id: string;
  title: string;
  type: PlaceType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
