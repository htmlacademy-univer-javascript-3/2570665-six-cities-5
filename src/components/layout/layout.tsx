import { Header } from './header.tsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../dataTypes/enums/app-routes.tsx';

interface LayoutProps {
  children: React.JSX.Element;
  isFooter?: boolean;
  isUserInfo?: boolean;
}

export function Layout({
  children,
  isFooter,
  isUserInfo
}: LayoutProps): React.JSX.Element {
  return (
    <>
      <Header isShowInfo={isUserInfo ?? false} />
      {children}
      {isFooter &&
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MainPage}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>}
    </>
  );
}
