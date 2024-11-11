import { Offer } from '../DataTypes/offerTypes/offer-type';
import { PlaceCardType } from '../DataTypes/room-type';

export const offer: Offer[] = [
  {
    'id': '1',
    'previewImg': 'img02.jpg',
    'isPremium': true,
    'isFavorite':true,
    'cityName': 'Amsterdam',
    'name': 'Beautiful & luxurious studio at great location',
    'rating': 4,
    'type': PlaceCardType.Apartment,
    'price': 120,
    'host': {
      'img':'img01.jpg',
      'hostName':'Angelina',
      'isPro':true,
    },
  },
  {
    'id': '2',
    'previewImg': 'img02.jpg',
    'isPremium': true,
    'isFavorite': false,
    'cityName': 'NewYork',
    'name': 'Wood and stone place',
    'rating': 5,
    'type': PlaceCardType.Apartment,
    'price': 11,
    'host': {
      'img':'img01.jpg',
      'hostName':'Sara',
      'isPro':true,
    },
  },
  {
    'id': '3',
    'previewImg': 'img02.jpg',
    'isPremium': false,
    'isFavorite':true,
    'cityName': 'Amsterdam',
    'name': 'Lalala',
    'rating': 3,
    'type': PlaceCardType.Apartment,
    'price': 12,
    'host': {
      'img':'img01.jpg',
      'hostName':'Tom',
      'isPro': false,
    },
  },
  {
    'id': '4',
    'previewImg': 'img02.jpg',
    'isPremium': false,
    'isFavorite': false,
    'cityName': 'Amsterdam',
    'name': 'Chipi Chipi Chapa Chapa',
    'rating': 1,
    'type': PlaceCardType.Room,
    'price': 2321,
    'host': {
      'img':'img01.jpg',
      'hostName':'Alex',
      'isPro':true,
    },
  },

];
