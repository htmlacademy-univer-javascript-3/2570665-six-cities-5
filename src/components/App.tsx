import {MainPageProps} from '../DataTypes/MainPageProps.tsx';
import {MainPage} from '../pages/MainPage.tsx';


export function App({placeCount}: MainPageProps): JSX.Element {
  return (
    <MainPage placeCount={placeCount} />
  );
}
