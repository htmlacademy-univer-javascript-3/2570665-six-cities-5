import { Link } from 'react-router-dom';
import { getIsAuthorized } from '../../store/user/user-selectors';
import { AuthorizedHeaderInfo } from './authorized-user';
import { AppRoute } from '../../types/enums/app-routes';
import { UnauthorizedHeaderInfo } from './unauthorized-user';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { fetchOffers } from '../../store/actions';
import { memo } from 'react';

interface HeaderProps {
  isShowInfo: boolean;
}

function HeaderImpl({ isShowInfo }: HeaderProps) {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MainPage} onClick={() => {
              dispatch(fetchOffers());
            }}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {isShowInfo ||
            (isAuthorized ? (<AuthorizedHeaderInfo />) : (<UnauthorizedHeaderInfo />))}
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderImpl);
