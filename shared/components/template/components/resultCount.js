/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SortVO from './sortVO';
import FacetsMobile from './facetsMobile';
import { searchTermHandler } from '../../../helpers/utils';

export function ResultCount(props) {
  const { singleColumn } = props;
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const [searchKey, setSearchKey] = useState(
    router?.query?.['submit-search']?.concat('+') || '',
  );

  const searchTerm = searchTermHandler('submit-search', router.asPath) || '';

  useEffect(() => {
    setSearchKey(searchTerm);
  }, [searchTerm]);

  const path = router.asPath.split('?')[0];

  const filterSearch = (val) => {
    // const checkTextforSpace = /^[A-Za-z\s]*$/.test(searchKey)
    // AB-1833
    const checkTextforSpace = (/\s/).test(searchKey);

    if (checkTextforSpace) {
      router.push({
        pathname: path,
        query: {
          'submit-search': encodeURI(
            `${props?.payLoad?.altSuggestedSearchTerms
              ? props?.payLoad?.altSuggestedSearchTerms
                .filter((ele) => ele !== val)
                .join('+') : searchKey.split(' ')
                .filter((ele) => ele !== val)
                .join('+')}`,
          ),
        },
      });
    } else {
      router.push({
        pathname: path,
        query: {
          'submit-search': encodeURI(
            `${props?.payLoad?.altSuggestedSearchTerms
              ? props?.payLoad?.altSuggestedSearchTerms
                ?.filter((ele) => ele !== val)
                ?.join('+')
              : searchKey
                ?.split('+')
                ?.filter((ele) => ele !== val)
                ?.join('+')}`,
          ),
        },
      });
    }
  };

  return (
    <div className="page-title-container d-flex justify-space-between align-items-top">
      <div className="result-count-start">
        <h1 className="w-100">
          {props?.payLoad?.page?.pageType?.id === 'search:default'
          || props?.payLoad?.searchTerm !== '' ? (
            <span className="result-title-count">
                {`Showing Results for "${
                    props?.payLoad?.autoCorrectTerm
                      ? props?.payLoad?.autoCorrectTerm
                      : searchTerm
                  }"`}
              </span>
            ) : (
              <span className="result-title-count">
                {props?.payLoad?.categoryData?.[0]?.additionalDetails?.title
                || props?.payLoad?.categoryData?.[0]?.name}
              </span>
            )}

          <small className="results-count countOne">
            {' '}
            (
            {props?.payLoad?.productCount}
          </small>
          <small className="results-count"> Results)</small>
        </h1>
        {props?.payLoad?.pageType === 'search'
          && props?.payLoad?.altSuggestedSearchTerms?.length > 1 && (
          <div className="d-flex token-container">
            {props?.payLoad?.altSuggestedSearchTerms?.map(
              (val, key) => (
                <div className="pr-10 breadcrumb-token" key={key}>
                  {val}
                  <span
                    className="px-1 remove-token"
                    onClick={() => filterSearch(val)}
                  >
                    x
                  </span>
                </div>
              ),
            )}
          </div>
        )}
      </div>
      {/* ABUAT-70 */}
      {!singleColumn && (
        <button
          className="btn btn-block btn-primary btn-filter js-mobile-menu-toggle visible-xs"
          onClick={() => setIsMobile(true)}
          type="button"
        >
          Filter
        </button>
      )}
      {isMobile && !singleColumn && <FacetsMobile closeToggle={() => setIsMobile(false)} {...props} /> }
      <SortVO {...props} />
    </div>
  );
}
export default ResultCount;
