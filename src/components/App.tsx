
import {MainPage} from '../pages/main-page.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoutes} from '../DataTypes/AppRoutes';
import { NotFoundPage } from '../pages/error-page.tsx';
import { FavoritesPage } from '../pages/favorites-page.tsx';
import { LoginPage } from '../pages/login-page.tsx';
import { OfferPage } from '../pages/offer-page.tsx';
import { Authorization } from './Authorization.tsx';
import { Offer } from '../DataTypes/offerTypes/offer-type.ts';

interface AppProps {
    offers: Offer[];
}

export function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.MainPage}
            element={<MainPage placeCount={5} offers={offers}/>}
          />
          <Route
            path={AppRoutes.FavoritesPage}
            element={
              <Authorization authorizationStatus>
                <FavoritesPage offers={offers}/>
              </Authorization>
            }
          />
          <Route
            path={AppRoutes.LoginPage}
            element={<LoginPage />}
          />
          <Route
            path={AppRoutes.OfferPageId}
            element={<OfferPage offers={offers}/>}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
