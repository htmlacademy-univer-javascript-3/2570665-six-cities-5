import { Offer } from '../DataTypes/offerTypes/offer-type';
import { PlaceCardType } from '../DataTypes/room-type';

export const offer: Offer[] = [
  {
    'id': '1',
    'previewImg': 'img02.jpg',
    'isPremium': true,
    'isFavorite':true,
    'city': {
      'title':'Paris',
      'latitude':52.3909553943508,
      'longitude':4.85309666406198,
      'zoom':2,
      'id':'1'
    },
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
    'city': {
      'title':'Amsterdam',
      'latitude':52.3609553943508,
      'longitude':4.85309666406198,
      'zoom':2,
      'id':'4'
    },
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
    'city': {
      'title':'Amsterdam',
      'latitude':52.3609553943508,
      'longitude':4.929309666406198,
      'zoom':2,
      'id':'4'
    },
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
    'city': {
      'title':'Amsterdam',
      'latitude':52.3809553943508,
      'longitude':4.929309666406198,
      'zoom':2,
      'id':'4'
    },
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
