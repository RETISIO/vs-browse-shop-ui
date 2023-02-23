/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
// import { usePageDataContext } from '../../context/pageData-context';

export function ResultCount(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <h1>
      <span className="result-title-count">
        {pageContentData?.categories?.[0]?.additionalDetails?.title || pageContentData?.categories?.[0]?.name}
      </span>
      <small className="results-count countOne">
        (
        {pageContentData?.payLoad?.productCount}
      </small>
      <small className="results-count">Results)</small>
    </h1>
  );
}
export default ResultCount;
