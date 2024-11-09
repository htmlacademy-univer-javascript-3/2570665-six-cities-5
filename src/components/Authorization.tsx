import {Navigate} from 'react-router-dom';
import { AppRoutes } from '../DataTypes/AppRoutes';

interface PrivateRouteProps {
  authorizationStatus: boolean;
  children: JSX.Element;
}

export function Authorization({
  authorizationStatus,
  children
}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus
      ? children
      : <Navigate to={AppRoutes.LoginPage} />
  );
}
