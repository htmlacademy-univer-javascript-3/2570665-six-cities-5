import { Offer } from '../DataTypes/offer-type';
import { OffersList } from './OffersList';

interface FavoritesListProps {
    offers: Offer[];
    cityName: string;
}

export function FavoritesList({offers,cityName}: FavoritesListProps): React.JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={offers}></OffersList>
      </div>
    </li>
  );
}
