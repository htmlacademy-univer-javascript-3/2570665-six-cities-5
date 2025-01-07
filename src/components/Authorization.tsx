import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../dataTypes/enums/authorization-status';
import { useAppSelector } from '../hooks/store-hooks';
import { getAuthorizationStatus } from '../store/user/user-selectors';
import { Spinner } from './spinner/spinner';
import { AppRoute } from '../dataTypes/enums/app-routes';

interface AuthorizationWrapperProps {
  children: React.JSX.Element;
  url: AppRoute;
  status: AuthorizationStatus;
}

export function AuthorizationWrapper({
  children,
  url,
  status,
}: AuthorizationWrapperProps): React.JSX.Element {
  const currentStatus = useAppSelector(getAuthorizationStatus);
  if (currentStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return currentStatus === status ? (children) : (<Navigate to={url} />);
}
