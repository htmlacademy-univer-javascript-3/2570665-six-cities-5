import { CITIES } from '../consts/city.ts';
import { useAppDispatch } from '../hooks/store-hooks.ts';
import { fetchOffers } from '../store/actions.ts';
import { changeCity } from '../store/offer/offer-slice.ts';
import React, { memo } from 'react';

import { City } from '../types/city.ts';


interface CitiesListProps {
  activeCityName: string;
}

function CitiesListImpl({
  activeCityName,
}: CitiesListProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city: City) => (
            <li key={city.name} className="locations__item">
              {city.name === activeCityName ? (
                <div className="locations__item-link tabs__item tabs__item--active">
                  <span>{city.name}</span>
                </div>
              ) : (
                <div
                  className="locations__item-link tabs__item"
                  onClick={() => {
                    dispatch(fetchOffers());
                    dispatch(changeCity(city));
                  }}
                >
                  <span>{city.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const CitiesList = memo(CitiesListImpl);
