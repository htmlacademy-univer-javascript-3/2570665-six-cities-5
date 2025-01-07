import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus } from '../dataTypes/enums/authorization-status.ts';
import { NotFoundPage } from '../pages/error-page/error-page.tsx';
import { FavoritesPage } from '../pages/favorites-page/favorites-page.tsx';
import { LoginPage } from '../pages/login-page/login-page.tsx';
import { MainPage } from '../pages/main-page/main-page.tsx';
import { OfferPage } from '../pages/offer-page/offer-page.tsx';
import { AuthorizationWrapper } from './authorization.tsx';
import { AppRoute } from '../dataTypes/enums/app-routes.tsx';
import { store } from '../store/store.ts';
import { Provider } from 'react-redux';


export function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.MainPage} element={<MainPage />} />
            <Route
              path={AppRoute.Login}
              element={
                <AuthorizationWrapper
                  url={AppRoute.MainPage}
                  status={AuthorizationStatus.Unauthorized}
                >
                  <LoginPage />
                </AuthorizationWrapper>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <AuthorizationWrapper
                  url={AppRoute.Login}
                  status={AuthorizationStatus.Authorized}
                >
                  <FavoritesPage />
                </AuthorizationWrapper>
              }
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
