import { Helmet } from 'react-helmet-async';
import { Layout } from '../../components/layout/layout';
import { getFavoritesOffers } from '../../store/offer/offer-selector';
import { useAppSelector } from '../../hooks/store-hooks';
import { EmptyFavoritesList } from '../../components/empty-favorites';
import { CITIES } from '../../consts/city';
import { FavoriteOffers } from '../../components/favorites-group';


export function FavoritesPage(): React.JSX.Element {
  const offers = useAppSelector(getFavoritesOffers);
  return (
    <div className={`page ${offers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities - favorites</title>
      </Helmet>
      <Layout isFooter>
        {offers.length > 0 ? (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {CITIES.map((city) => {
                    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
                    if (filteredOffers.length !== 0) {
                      return (<FavoriteOffers offers={filteredOffers} cityName={city.name} key={city.name} />);
                    }
                  })}
                </ul>
              </section>
            </div>
          </main>) : (<EmptyFavoritesList />)}
      </Layout>
    </div>
  );
}
