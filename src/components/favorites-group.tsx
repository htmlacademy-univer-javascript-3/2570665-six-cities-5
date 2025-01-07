import { Link } from 'react-router-dom';
import { CITIES } from '../consts/city';
import { AppRoute } from '../dataTypes/enums/app-routes';
import { OfferCardInfo } from '../dataTypes/offer';
import { changeCity } from '../store/offer/offer-slice';
import { OffersList } from './offer/offers-list';
import { useAppDispatch } from '../hooks/store-hooks';


interface FavoriteOffersProps {
  cityName: string;
  offers: OfferCardInfo[];
}

export function FavoriteOffers({
  cityName,
  offers,
}: FavoriteOffersProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = () => {
    const selectedCity = CITIES.find((city) => city.name === cityName);
    if (selectedCity) {
      dispatch(changeCity(selectedCity));
    }
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" onClick={handleCityChange} to={AppRoute.MainPage}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={offers} />
      </div>
    </li>
  );
}
