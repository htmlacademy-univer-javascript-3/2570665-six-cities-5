
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
    cityName:string;
    name: string;
    rating: number;
    type: PlaceCardType;
    price: number;
    host: Host;
};
