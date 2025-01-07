import { OfferCardInfo } from '../../dataTypes/offer';
import { SortOffers } from '../../dataTypes/filter-type';

const createFilter = (filterFunction: (a: OfferCardInfo, b: OfferCardInfo) => number): SortOffers => (offers: OfferCardInfo[]) => [...offers].sort(filterFunction);

export const filterOptions: [string, SortOffers][] = [
  ['Popular', (offers: OfferCardInfo[]) => offers],
  ['Price: low to high', createFilter((a, b) => a.price - b.price)],
  ['Price: high to low', createFilter((a, b) => b.price - a.price)],
  ['Top rated first', createFilter((a, b) => b.rating - a.rating)],
];
