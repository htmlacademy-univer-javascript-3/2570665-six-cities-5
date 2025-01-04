import { Offer } from '../DataTypes/offer-type';
import { PlaceCard } from './PlaceCard';

interface OfferListProps {
    offers: Offer[];
    isOnMainPage?: boolean;
}

export function OffersList({offers, isOnMainPage}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=><PlaceCard offers={offer} key={offer.id} isOnMainPage={isOnMainPage}></PlaceCard>)}
    </div>);
}
