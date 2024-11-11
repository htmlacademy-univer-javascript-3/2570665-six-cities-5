
import { Offer } from '../DataTypes/offerTypes/offer-type';
import { PlaceCard } from './PlaceCard';

interface OfferListProps {
    offers: Offer[];
}

export function OffersList({offers}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=><PlaceCard offers={offer} key={offer.id}></PlaceCard>)}
    </div>);
}
