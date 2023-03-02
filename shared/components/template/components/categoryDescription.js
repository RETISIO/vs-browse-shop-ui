/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import URLHandler from '../../../helpers/urlHandler';
// import { usePageDataContext } from '../../context/pageData-context';

export function CategoryDescription(props) {
  const { data, pageType } = props;
  const [pageContentData, setPageContent] = useState(data);
  const [closeFlyout, setCloseFlyout] = useState(false);
  const router = useRouter();
  const searchTerm = URLHandler('st', router.asPath) || '';
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <>
      {pageType === 'search' ? (
        <>
          {pageContentData?.payLoad?.autoCorrectTerm ? (
            <>
              {!closeFlyout && (
                <div
                  className="alert alert-dismissible hidden-print alert-info"
                  role="alert"
                >
                  <button className="close" type="button" aria-label="Close">
                    <span
                      aria-hidden="true"
                      onClick={() => setCloseFlyout(true)}
                    >
                      ×
                    </span>
                  </button>
                  <strong>
                    <span>{`Corrected from "${searchTerm}"`}</span>
                  </strong>
                </div>
              )}
            </>
          ) : null}
        </>
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
