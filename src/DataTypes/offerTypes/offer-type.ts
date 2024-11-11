
import { City } from '../city';
import { PlaceCardType } from '../room-type';

export type Host ={
    img: string;
    hostName: string;
    isPro: boolean;
};

export type Offer = {
    id: string;
    previewImg: string;
    isPremium: boolean;
    isFavorite: boolean;
    city:City;
    name: string;
    rating: number;
    type: PlaceCardType;
    price: number;
    host: Host;
};
