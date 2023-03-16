/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import URLHandler from '../../../helpers/urlHandler';
// import { usePageDataContext } from '../../context/pageData-context';

export function ResultCount(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const router = useRouter();

  const [searchKey, setSearchKey] = useState(router?.query?.st?.concat('+') || '');

  const searchTerm = URLHandler('st', router.asPath) || '';

  useEffect(() => {
    setSearchKey(searchTerm);
  }, [searchTerm]);

  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  const path = router.asPath.split('?')[0];

  const filterSearch = (val) => {
    const checkTextforSpace = /^[A-Za-z\s]*$/.test(searchKey);

    if(checkTextforSpace) {
      router.push({
        pathname: path,
        query: {
          st: encodeURI(`${searchKey.split(' ').filter((ele) => ele !== val).join('+')}`),
        },
      });
    } else {
      router.push({
        pathname: path,
        query: {
          st: encodeURI(`${searchKey.split('+').filter((ele) => ele !== val).join('+')}`),
        },
      });
    }
  };

  return (
    <div>
      <h1 className="w-100">
        {pageContentData?.page?.pageType?.id === 'search:default' ? (
          <span className="result-title-count">
            {`Showing Results for "${pageContentData?.payLoad?.autoCorrectTerm ? pageContentData?.payLoad?.autoCorrectTerm : pageContentData?.payLoad?.searchTerm}"`}
          </span>
        ) : (
          <span className="result-title-count">
            {pageContentData?.categories?.[0]?.additionalDetails?.title
            || pageContentData?.categories?.[0]?.name}
          </span>
        )}

        <small className="results-count countOne">
          {' '}
          (
          {pageContentData?.payLoad?.productCount}
        </small>
        <small className="results-count"> Results)</small>
      </h1>
      {pageContentData?.payLoad?.altSuggestedSearchTerms?.length > 1
        && (
          <div className="d-flex token-container">
            {pageContentData?.payLoad?.altSuggestedSearchTerms?.map((val, key) => (
              <div className="pr-10 breadcrumb-token" key={key}>
                {val}
                <span
                  className="px-1 remove-token"
                  onClick={() => filterSearch(val)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
export default ResultCount;
