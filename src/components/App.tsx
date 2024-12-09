
import {MainPage} from '../pages/main-page.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoutes} from '../DataTypes/AppRoutes';
import { NotFoundPage } from '../pages/error-page.tsx';
import { FavoritesPage } from '../pages/favorites-page.tsx';
import { LoginPage } from '../pages/login-page.tsx';
import { OfferPage } from '../pages/offer-page.tsx';
import { Authorization } from './Authorization.tsx';
import { offer } from '../mocks/offers.ts';
import { useAppSelector } from '../hoocks/index.ts';
import { Spinner } from '../pages/spinner-page.tsx';


export function App(): JSX.Element {
  const dataOffersLoadingStatus = useAppSelector((state) => state.dataStatus);

  if (dataOffersLoadingStatus) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.MainPage}
            element={<MainPage />}
          />
          <Route
            path={AppRoutes.FavoritesPage}
            element={
              <Authorization authorizationStatus>
                <FavoritesPage />
              </Authorization>
            }
          />
          <Route
            path={AppRoutes.LoginPage}
            element={<LoginPage />}
          />
          <Route
            path={AppRoutes.OfferPageId}
            element={<OfferPage offers={offer}/>}
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
