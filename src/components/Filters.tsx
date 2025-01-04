import React, { useState, useCallback } from 'react';
import { Offer } from '../DataTypes/offer-type.ts';
import { useAppDispatch } from '../hoocks/index.ts';
import { sorting } from '../store/actions.ts';

const sortingOptions: Record<string, (offers: Offer[]) => Offer[]> = {
  Popular: (offers) => offers,
  'Price: low to high': (offers) => [...offers].sort((a, b) => a.price - b.price),
  'Price: high to low': (offers) => [...offers].sort((a, b) => b.price - a.price),
  'Top rated first': (offers) => [...offers].sort((a, b) => b.rating - a.rating),
};

export function Filters(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [sortingOption, setSortingOption] = useState('Popular');
  const dispatch = useAppDispatch();

  const handleSortChange = useCallback(
    (sort: (offers: Offer[]) => Offer[], sortingOptionName: string) => {
      setSortingOption(sortingOptionName);
      dispatch(sorting(sort));
      setIsOpen(false);
    },
    [dispatch]
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
      >
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(sortingOptions).map(([name, sort]) => (
            <li
              className={`places__option ${name === sortingOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={name}
              onClick={() => handleSortChange(sort, name)}
              onKeyDown={(e) => e.key === 'Enter' && handleSortChange(sort, name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
