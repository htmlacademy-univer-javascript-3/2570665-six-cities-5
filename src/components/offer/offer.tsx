import { Link } from 'react-router-dom';
import { Rating } from '../rating.tsx';
import { OfferCardInfo } from '../../dataTypes/offer.ts';
import { AppRoute } from '../../dataTypes/enums/app-routes.tsx';

interface OfferCardProps {
  offer: OfferCardInfo;
  onMouseEnter?: (offer: OfferCardInfo) => void;
  onMouseLeave?: () => void;
  isOnMainPage?: boolean;
}

export function OfferCard({
  offer,
  onMouseEnter,
  onMouseLeave,
  isOnMainPage,
}: OfferCardProps): React.JSX.Element {
  const handleMouseEnter = (): void => onMouseEnter?.(offer);
  const handleMouseLeave = (): void => onMouseLeave?.();
  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={ `place-card ${isOnMainPage ? 'cities__card' : 'near-places__card'}`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${isOnMainPage ? 'cities__image-wrapper' : 'near-places__image-wrapper'}`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button>Add</button>
        </div>
        <Rating rating={offer.rating} usePlace="place-card" />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}


