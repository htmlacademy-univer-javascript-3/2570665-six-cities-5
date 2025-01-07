import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Nullable } from 'vitest';
import { CitiesList } from '../../components/cities-list';
import { Layout } from '../../components/layout/layout';
import { OffersList } from '../../components/offer/offers-list';
import { OfferFilter } from '../../components/filters/filters';
import { OfferCardInfo } from '../../types/offer';
import { getRightSpelling } from '../../helpers';
import { getCity, getSortedOffers } from '../../store/offer/offer-selector';
import { Map } from '../../components/map-component';
import { useAppSelector } from '../../hooks/store-hooks';
import { EmptyOffersList } from '../../components/offer/empty-offers';


export function MainPage(): React.JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferCardInfo>>(null);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getSortedOffers);
  const handleActiveOfferChange = useCallback(
    (offer: Nullable<OfferCardInfo>) => setActiveOffer(offer),
    [],
  );
  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className="page__main page__main--index">
          <Helmet>6 cities</Helmet>
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList activeCityName={city.name} />
          {offers.length > 0 ? (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${getRightSpelling('place', offers.length)} to stay in ${city.name}`}</b>
                  <OfferFilter />
                  <OffersList
                    offers={offers}
                    onActiveOfferChange={handleActiveOfferChange}
                    isOnMainPage
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    city={city}
                    points={offers.map((x) => ({
                      location: x.location,
                      id: x.id,
                    }))}
                    selectedPoint={
                      activeOffer
                        ? {
                          location: activeOffer?.location,
                          id: activeOffer?.id,
                        }
                        : undefined
                    }
                    isOnMainPage
                  />
                </div>
              </div>
            </div>
          ) : (<EmptyOffersList city={city}></EmptyOffersList>)}
        </main>
      </Layout>
    </div>
  );
}
