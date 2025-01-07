import React from 'react';
import { Nullable } from 'vitest';
import { OfferCardInfo } from '../../dataTypes/offer';
import { OfferCard } from './offer';

interface OffersListProps {
  offers: OfferCardInfo[];
  onActiveOfferChange?: (offer: Nullable<OfferCardInfo>) => void;
  isOnMainPage?: boolean;
}

export function OffersList({
  offers,
  onActiveOfferChange,
  isOnMainPage,
}: OffersListProps): React.JSX.Element {
  const handleMouseEnter = (offer: OfferCardInfo) => {
    onActiveOfferChange?.(offer);
  };
  const handleMouseLeave = () => {
    onActiveOfferChange?.(null);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isOnMainPage={isOnMainPage}
        />
      ))}
    </div>
  );
}

