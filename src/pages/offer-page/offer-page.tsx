import { Helmet } from 'react-helmet-async';
import { Map } from '../../components/map-component.tsx';
import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/layout/layout.tsx';
import { OffersList } from '../../components/offer/offers-list.tsx';
import { Rating } from '../../components/rating.tsx';
import { Reviews } from '../../components/review/review-list.tsx';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { getRightSpelling } from '../../helpers.ts';
import { fetchOffer, fetchNearbyOffers, fetchReviews } from '../../store/actions.ts';
import { getNearbyOffers, getCurrentOffer, getCurrentReviews } from '../../store/current/current-selector.ts';
import { setCurrentOffer } from '../../store/current/current-slice.ts';
import { AppRoute } from '../../types/enums/app-routes.tsx';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import { store } from '../../store/store.ts';
import { BookmarkButton } from '../../components/bookmark-button.tsx';

export function OfferPage(): React.JSX.Element {
  const offerId = useParams().id;
  useEffect(() => {
    store.dispatch(setCurrentOffer(null));
    store.dispatch(fetchOffer(offerId!));
    store.dispatch(fetchNearbyOffers(offerId!));
    store.dispatch(fetchReviews(offerId!));
  }, [offerId]);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const currentOffer = useAppSelector(getCurrentOffer);
  const currentReviews = useAppSelector(getCurrentReviews);
  if (currentOffer === undefined) {
    return <Navigate to={AppRoute.NotFoundPage} />;
  }
  return (
    <div className="page">
      <Layout>
        <main className="page__main page__main--offer">
          <Helmet>6 cities - offer</Helmet>
          {!currentOffer ? (
            <Spinner/>
          ) : (
            <>
              <section className="offer">
                <div className="offer__gallery-container container">
                  <div className="offer__gallery">
                    {currentOffer.images.slice(0, 6).map((src) => (
                      <div key={`${src}`} className="offer__image-wrapper">
                        <img className="offer__image" src={src} alt="Photo studio" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="offer__container container">
                  <div className="offer__wrapper">
                    {currentOffer.isPremium && (
                      <div className="offer__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="offer__name-wrapper">
                      <h1 className="offer__name">{currentOffer.title}</h1>
                      <BookmarkButton
                        size
                        isFavorite={currentOffer.isFavorite}
                        usagePlace="offer"
                        offerId={currentOffer.id}
                      />
                    </div>
                    <Rating
                      rating={currentOffer.rating}
                      usePlace="offer"
                      showRatingValue
                    />
                    <ul className="offer__features">
                      <li className="offer__feature offer__feature--entire">
                        {currentOffer.type.charAt(0).toUpperCase() + currentOffer.type.slice(1)}
                      </li>
                      <li className="offer__feature offer__feature--bedrooms">
                        {getRightSpelling('bedroom', currentOffer.bedrooms)}
                      </li>
                      <li className="offer__feature offer__feature--adults">
                        Max{' '}
                        {getRightSpelling('adult', currentOffer.maxAdults)}
                      </li>
                    </ul>
                    <div className="offer__price">
                      <b className="offer__price-value">
                        &euro;{currentOffer.price}
                      </b>
                      <span className="offer__price-text">&nbsp;night</span>
                    </div>
                    <div className="offer__inside">
                      <h2 className="offer__inside-title">What&apos;s inside</h2>
                      <ul className="offer__inside-list">
                        {currentOffer.goods.map((item) => (
                          <li key={item} className="offer__inside-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="offer__host">
                      <h2 className="offer__host-title">Meet the host</h2>
                      <div className="offer__host-user user">
                        {currentOffer.host.isPro ? (
                          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                            <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                          </div>
                        ) : (
                          <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                        )}
                        <span className="offer__user-name">{currentOffer.host.name.split(' ')[0]}</span>
                        {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                      </div>
                      <div className="offer__description">
                        <p className="offer__text">
                          {currentOffer.description}
                        </p>
                      </div>
                    </div>
                    <Reviews reviews={currentReviews} />
                  </div>
                </div>
                <Map
                  city={currentOffer.city}
                  points={[...nearbyOffers, currentOffer].map((x) => ({
                    location: x.location,
                    id: x.id,
                  }))}
                  selectedPoint={{
                    location: currentOffer.location,
                    id: currentOffer.id,
                  }}
                />
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">
                    Other places in the neighbourhood
                  </h2>
                  <div className="near-places__list places__list">
                    {nearbyOffers && <OffersList offers={nearbyOffers} />}
                  </div>
                </section>
              </div>
            </>
          )}
        </main>
      </Layout>
    </div>
  );
}
