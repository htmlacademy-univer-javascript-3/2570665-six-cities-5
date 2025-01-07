import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/enums/app-routes';

export function ErrorFragment(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.MainPage}>Вернуться на главную</Link>
    </Fragment>
  );
}
