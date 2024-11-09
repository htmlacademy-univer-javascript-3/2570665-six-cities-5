
import {MainPage} from '../pages/MainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoutes} from '../DataTypes/AppRoutes';
import { NotFoundPage } from '../pages/ErrorPage.tsx';
import { FavoritesPage } from '../pages/FavoritesPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';
import { OfferPage } from '../pages/OfferPage.tsx';
import { Authorization } from './Authorization.tsx';

interface AppProps {
    placeCount: number;
    isAuthorized: boolean;
}

export function App({placeCount, isAuthorized}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.MainPage}
            element={<MainPage placeCount={placeCount} />}
          />
          <Route
            path={AppRoutes.FavoritesPage}
            element={
              <Authorization authorizationStatus={isAuthorized}>
                <FavoritesPage/>
              </Authorization>
            }
          />
          <Route
            path={AppRoutes.LoginPage}
            element={<LoginPage />}
          />
          <Route
            path={AppRoutes.OfferPage}
            element={<OfferPage />}
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
