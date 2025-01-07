import React, { memo, useState } from 'react';
import { SortOffers } from '../../types/filter-type';
import { setSorting } from '../../store/offer/offer-slice';
import { useAppDispatch } from '../../hooks/store-hooks';
import { filterOptions } from './filter-options';


function OfferFilterImpl(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('Popular');
  const dispatch = useAppDispatch();

  const handleFilterChange = (sort: SortOffers, sortingOptionName: string) => {
    setFilter(sortingOptionName);
    dispatch(setSorting(sort));
    setIsOpen(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {filterOptions.map(([name, sort]) => (
            <li className={`places__option ${name === filter ? 'places__option--active' : ''}`} tabIndex={0} key={name} onClick={() => handleFilterChange(sort, name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export const OfferFilter = memo(OfferFilterImpl);
