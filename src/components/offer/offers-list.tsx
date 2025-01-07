import React, { useCallback } from 'react';
import { Nullable } from 'vitest';
import { OfferCardInfo } from '../../types/offer';
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
  const handleMouseEnter = useCallback(
    (offer: OfferCardInfo) => onActiveOfferChange?.(offer),
    [onActiveOfferChange],
  );
  const handleMouseLeave = useCallback(
    () => onActiveOfferChange?.(null),
    [onActiveOfferChange],
  );
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

