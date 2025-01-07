import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../types/enums/app-routes';
import { logout } from '../../store/actions';
import { getFavoritesOffers } from '../../store/offer/offer-selector';
import { setFavoriteOffers} from '../../store/offer/offer-slice';
import { getUserInfo } from '../../store/user/user-selectors';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { memo } from 'react';


export function AuthorizedHeaderInfoImpl() {
  const userInformation = useAppSelector(getUserInfo);
  const favoritesNumber = useAppSelector(getFavoritesOffers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(setFavoriteOffers([]));
    navigate(AppRoute.MainPage);
  };
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              {userInformation?.avatarUrl && (
                <img className="user__avatar" src={userInformation.avatarUrl}alt="user avatar"/>
              )}
            </div>
            <span className="header__user-name user__name">{userInformation?.email}</span>
            <span className="header__favorite-count">{favoritesNumber.length}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <div className="header__nav-link" onClick={handleLogout}>
            <span className="header__signout">Sign out</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export const AuthorizedHeaderInfo = memo(AuthorizedHeaderInfoImpl);
