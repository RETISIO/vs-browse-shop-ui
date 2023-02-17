/* eslint-disable linebreak-style */
import React from 'react';
import { usePageDataContext } from '../context/pageData-context';

function SortVO() {
  const { pageData } = usePageDataContext();

  return (
    <form className="form-inline sort-by">
      <div className="form-group">
        <label htmlFor="cc-sort">Sort By:</label>
        <select id="cc-sort" className="form-control">
          {pageData?.payLoad?.sortVO?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={item.sortValue} key={index}>{item.sortLabel}</option>
          ))}
        </select>
        <span className="text-danger" role="alert"></span>
      </div>
    </form>
  );
}

export default SortVO;
