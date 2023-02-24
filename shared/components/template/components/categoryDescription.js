/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
// import { usePageDataContext } from '../../context/pageData-context';

export function CategoryDescription(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{pageContentData?.categories?.[0]?.description}</>
  );
}

export function CategoryLongDescription(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <div
      className="hidden-xs"
        // eslint-disable-next-line max-len
      dangerouslySetInnerHTML={{__html: pageContentData?.categories?.[0]?.longDescription}}
    >
    </div>
  );
}

export default { CategoryDescription, CategoryLongDescription };
