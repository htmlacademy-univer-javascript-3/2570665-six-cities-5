import {Navigate} from 'react-router-dom';
import { AppRoutes } from '../DataTypes/AppRoutes';
import { useAppSelector } from '../hoocks';
import { AuthorizationStatus } from '../DataTypes/auth-types';

interface AuthorizationProps {
  children: React.JSX.Element;
}

export function AuthorizationForAuthorized({
  children,
}: AuthorizationProps): React.JSX.Element {
  return useAppSelector((state) => state.authStatus) ===
  AuthorizationStatus.Authorized ? children : <Navigate to={AppRoutes.LoginPage} />;
}

export function AuthorizationForUnauthorized({
  children,
}: AuthorizationProps): React.JSX.Element {
  return useAppSelector((state) => state.authStatus) ===
  AuthorizationStatus.Unauthorized ? children : <Navigate to={AppRoutes.MainPage} />;
}
