import { Location } from './location';

export type City = {
  name:
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';
  location: Location;
};
