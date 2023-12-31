/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import URLHandler from '../../helpers/urlHandler';
import { searchTermHandler } from '../../helpers/utils';

function SortVO(props) {
  const router = useRouter();
  const { payLoad } = props;

  const [selectedCategories, setSelectedCategories] = useState(router?.query?.N?.concat('+') || '');
  const [selectedFacets, setSelectedFacets] = useState(router?.query?.t?.concat('+') || '');
  const [selectedSort, setSelectedSort] = useState(router?.query?.so?.concat('+') || '');

  const path = router.asPath.split('?')[0];
  const categoryIds = URLHandler('N', router.asPath) || '';
  const facetIds = URLHandler('t', router.asPath) || '';
  const sortId = URLHandler('so', router.asPath) || '';
  const searchTerm = searchTermHandler('submit-search', router.asPath) || '';

  useEffect(() => {
    setSelectedCategories(categoryIds);
    setSelectedFacets(facetIds);
    setSelectedSort(sortId);
  }, [categoryIds, facetIds, sortId]);

  const handleChange = (event) => {
    const id = event.target.value;
    setSelectedSort(id);
    router.push({
      pathname: path,
      query: {
        N: encodeURI(`${selectedCategories}`),
        t: encodeURI(`${selectedFacets}`),
        so: encodeURI(`${(id)}`),
        'submit-search': searchTerm, //search term issue
      },
    });
  };

  return (
    <form className="form-inline sort-by">
      <div className="form-group">
        <label htmlFor="cc-sort">Sort By:</label>
        <select
          id="cc-sort"
          className="form-control"
          onChange={(e) => handleChange(e)}
          aria-label="Sort By"
        >
          {payLoad?.sortVO?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option
              value={item.sortValue}
              key={index}
              selected={item?.isSelected}
              aria-selected={item?.isSelected ? 'true' : 'false'}
            >
              {item?.sortLabel}
            </option>
          ))}
        </select>
        <span className="text-danger" role="alert"></span>
      </div>
    </form>
  );
}

export default SortVO;
