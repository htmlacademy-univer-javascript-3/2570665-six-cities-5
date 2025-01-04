import {useEffect, useState} from 'react';
import { OffersList } from '../components/OffersList.tsx';
import { Map } from '../components/Map.tsx';
import { CitiesList } from '../components/CitiesList.tsx';
import { Cities } from '../mocks/cities.ts';
import {useAppSelector} from '../hoocks';
import { Offer } from '../DataTypes/offer-type.ts';
import { Filters } from '../components/Filters.tsx';

export function MainPage(): React.JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const city = useAppSelector((state) => state.city);
  const [cityOffers, setCurrentOffers] = useState<Offer[]>(offers);
  const [offerId] = useState<string | null>(null);
  const selectOffer = offers.find((offer) => offer.id === offerId);
  useEffect(() => {
    const filtered = offers.filter((offer) => offer.city.name === city.name);
    setCurrentOffers(filtered);
  }, [city, offers]);
  const sort = useAppSelector((state) => state.sorting);
  const sorted = sort(cityOffers);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sorted.length === 0 ? 'No places to stay available' : `${cityOffers.length} places to stay in ${city.name}`}</b>
              <Filters></Filters>
              <OffersList offers={sorted} isOnMainPage></OffersList>
            </section>
            <div className="cities__right-section">
              <Map city={city} isOnMainPage points={cityOffers} selectedPoint={selectOffer}></Map>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
