/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import URLHandler from '../../../helpers/urlHandler';
// import { usePageDataContext } from '../../context/pageData-context';

export function CategoryDescription(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const router = useRouter();
  const searchTerm = URLHandler('st', router.asPath) || '';
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <>
      {pageContentData?.page?.pageType?.id === 'search:default'
      && pageContentData?.payLoad?.hasOwnProperty('autoCorrectTerm') ? (
        <div className="alert alert-dismissible hidden-print alert-info" role="alert">
            <button className="close" type="button" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <strong>
              <span>
                {`Corrected from "${pageContentData?.payLoad?.searchTerm}"`}
              </span>
            </strong>
          </div>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: pageContentData?.categories?.[0]?.description,
            }}
          >
          </div>
        )}
    </>
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
      dangerouslySetInnerHTML={{
        __html: pageContentData?.categories?.[0]?.longDescription,
      }}
    >
    </div>
  );
}

export default { CategoryDescription, CategoryLongDescription };
