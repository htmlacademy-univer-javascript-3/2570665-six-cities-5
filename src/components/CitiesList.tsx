import {useAppDispatch} from '../hoocks';
import {changeCity} from '../store/actions.ts';
import {City} from '../DataTypes/city.ts';

type CitiesListProps = {
  cities: City[];
};

export function CitiesList({ cities }: CitiesListProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => dispatch(changeCity(city))}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
