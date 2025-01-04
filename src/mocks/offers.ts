import { Offer } from '../DataTypes/offer-type';
import { PlaceType } from '../DataTypes/room-type';

export const offer: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: PlaceType.Apartment,
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f0',
    title: 'Hmm',
    type: PlaceType.Room,
    price: 120000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 8.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 8.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f',
    title: 'YupYup',
    type: PlaceType.Hotel,
    price: 12,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 7.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 7.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 6,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4
  }

];
