import React from 'react';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import {AppRoutes} from '../DataTypes/AppRoutes';

export function Error(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <Link to={AppRoutes.MainPage}>Вернуться на главную</Link>
    </Fragment>
  );
}
