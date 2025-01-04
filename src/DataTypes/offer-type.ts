import { City } from './city';
import { Location } from './location';
import { PlaceType } from './room-type';

export type Host = {
    avatarUrl: string;
    name: string;
    isPro: boolean;
};

export type Offer = {
    id: string;
    images: string[];
    isPremium: boolean;
    isFavorite: boolean;
    city: City;
    title: string;
    rating: number;
    type: PlaceType;
    price: number;
    host: Host;
    description: string;
    bedrooms: number;
    goods: string[];
    maxAdults: number;
    location: Location;
};
