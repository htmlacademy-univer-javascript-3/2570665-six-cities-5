import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OfferCardInfo } from '../types/offer.ts';
import { bookmarkOffer } from '../store/actions.ts';
import { getIsAuthorized } from '../store/user/user-selectors.ts';
import { AppRoute } from '../types/enums/app-routes.tsx';
import { useAppSelector } from '../hooks/store-hooks.ts';
import { store } from '../store/store.ts';
import { sizes } from '../types/size.ts';

interface BookmarkButtonProps {
  size?: boolean;
  isFavorite?: boolean;
  usagePlace: 'offer' | 'place-card';
  offerId: OfferCardInfo['id'];
}

export function BookmarkButton({
  size,
  offerId,
  isFavorite,
  usagePlace,
}: BookmarkButtonProps): React.JSX.Element {
  const navigate = useNavigate();
  const [isFavoriteReactive, setIsFavoriteReactive] = useState<boolean>(
    isFavorite ?? false,
  );
  const isAuthorized = useAppSelector(getIsAuthorized);

  const handleOnClick = () => {
    if (isAuthorized) {
      store.dispatch(
        bookmarkOffer({ offerId: offerId, status: !isFavoriteReactive }),
      );
      setIsFavoriteReactive(!isFavoriteReactive);
    } else {
      navigate(AppRoute.Login);
    }
  };

  const { width, height } = sizes[size ? 'big' : 'small'];

  return (
    <button
      className={`${usagePlace}__bookmark-button ${isFavoriteReactive && isAuthorized ? `${usagePlace}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleOnClick}
    >
      <svg
        className={`${usagePlace}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavoriteReactive && isAuthorized ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
