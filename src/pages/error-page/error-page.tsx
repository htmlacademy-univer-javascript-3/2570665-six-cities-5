
import { Helmet } from 'react-helmet-async';
import { ErrorFragment } from '../../components/error-fragment/error-fragment';


export function NotFoundPage(): React.JSX.Element {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>404 - not found</title>
      </Helmet>
      <ErrorFragment></ErrorFragment>
    </main>
  );
}
