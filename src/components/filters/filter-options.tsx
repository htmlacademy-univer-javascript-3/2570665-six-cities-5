import { OfferCardInfo } from '../../types/offer';
import { SortOffers } from '../../types/filter-type';
import { FILTER_TITLE_POPULAR, FILTER_TITLE_PRICE_HIGH_TO_LOW, FILTER_TITLE_PRICE_LOW_TO_HIGH, FILTER_TITLE_TOP_RATED_FIRST } from '../../consts/filter';

const createFilter = (filterFunction: (a: OfferCardInfo, b: OfferCardInfo) => number): SortOffers => (offers: OfferCardInfo[]) => [...offers].sort(filterFunction);

export const filterOptions: [string, SortOffers][] = [
  [FILTER_TITLE_POPULAR, (offers: OfferCardInfo[]) => offers],
  [FILTER_TITLE_PRICE_LOW_TO_HIGH, createFilter((a, b) => a.price - b.price)],
  [FILTER_TITLE_PRICE_HIGH_TO_LOW, createFilter((a, b) => b.price - a.price)],
  [FILTER_TITLE_TOP_RATED_FIRST, createFilter((a, b) => b.rating - a.rating)],
];
